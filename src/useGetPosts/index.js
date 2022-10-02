/**
 * External dependencies
 *
 * @ignore
 */
import { selectOptions } from '@mypreview/unicorn-js-utils';
import useDeepCompareEffect from 'use-deep-compare-effect';

/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 *
 * @ignore
 */
import { useToast, useToggle } from '../';
import { apiClient } from '../utils';

/**
 * Retrieve a list of post-type posts and refresh
 * the list when any direct arguments change.
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

	useDeepCompareEffect( () => {
		setLoading();
		apiClient
			.get( `/wp/v2/${ postType }`, { per_page: -1, post_status: 'publish', ...args } )
			.then( ( data ) => {
				setOptions( selectOptions( data, { id: 'value', 'title.rendered': 'label' }, [] ) );
				setQuery( data );
			} )
			.catch( ( { message } ) => {
				setQuery( [] );
				toast( message );
			} )
			.then( () => {
				setLoading();
			} );
	}, [ args, clientId, postType ] );

	return { isLoading: loading, postsOptions: options, postsQuery: query };
};
