/**
 * Utility helper methods.
 *
 * @ignore
 */
import { selectOptions } from '@mypreview/unicorn-js-utils';

/**
 * WordPress specific abstraction layer atop React.
 *
 * @ignore
 */
import { useState } from '@wordpress/element';

/**
 * React hook to make deep comparison on the inputs, not reference equality.
 *
 * @ignore
 */
import useDeepCompareEffect from 'use-deep-compare-effect';

/**
 * Generate toast messages.
 *
 * @ignore
 */
import useToast from '../useToast';

/**
 * Toggling the value of the state.
 *
 * @ignore
 */
import useToggle from '../useToggle';

/**
 * API connection interface for setting and receiveing API key.
 *
 * @ignore
 */
import { apiClient } from '../utils';

/**
 * Retrieve list of post-type posts and maintain refreshing
 * this list when any of the direct arguments changed.
 *
 * @function
 * @since       1.0.0
 * @name 		useGetPosts
 * @param       {Object}    args    	Arguments to be passed to the apiFetch method.
 * @param       {string}    clientId    The block’s client id.
 * @param       {string}    postType    Post type name.
 * @return      {Object} 			    List of posts retrieved from the API along with a list of options to select from.
 * @example
 *
 * const { postsOptions, postsQuery } = useGetPosts( { order: 'asc' }, clientId, 'posts' );
 */
export default ( args = {}, clientId, postType ) => {
	const [ options, setOptions ] = useState( [] );
	const [ query, setQuery ] = useState( '' );
	const [ loading, setLoading ] = useToggle();
	const toast = useToast();
	const { errorMessage, ...otherArgs } = args;

	useDeepCompareEffect( () => {
		setLoading();
		apiClient
			.get( `/wp/v2/${ postType }`, { per_page: -1, post_status: 'publish', ...otherArgs } )
			.then( ( data ) => {
				setOptions( selectOptions( data, { id: 'value', 'title.rendered': 'label' }, [] ) );
				setQuery( data );
			} )
			.catch( ( err ) => {
				setQuery( [] );
				toast( errorMessage || err?.message );
			} )
			.then( () => {
				setLoading();
			} );
	}, [ args, clientId, postType ] );

	return { isLoading: loading, postsOptions: options, postsQuery: query };
};
