/**
 * External dependencies
 *
 * @ignore
 */
import { map, pick } from 'lodash';
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
 * Retrieve a list of taxonomy terms and refresh
 * the list when any direct arguments change.
 *
 * @function
 * @since       1.0.0
 * @name 		useGetTerms
 * @param       {string}    taxonomy    Taxonomy name.
 * @param       {Object}    args    	Arguments to be passed to the apiFetch method.
 * @return      {Object} 			    List of terms retrieved from the API along with a list of options to select from.
 * @example
 *
 * const { termsOptions, termsQuery } = useGetTerms( 'categories' );
 */
export default ( taxonomy, args = {} ) => {
	const [ options, setOptions ] = useState( [] );
	const [ query, setQuery ] = useState( '' );
	const [ loading, setLoading ] = useToggle();
	const toast = useToast();

	useDeepCompareEffect( () => {
		setLoading();
		apiClient
			.get( `/wp/v2/${ taxonomy }`, { per_page: -1, post_status: 'publish', ...args } )
			.then( ( data ) => {
				setOptions( map( data, ( term ) => pick( term, [ 'id', 'name', 'parent' ] ) ) );
				setQuery( data );
			} )
			.catch( ( { statusText } ) => {
				setQuery( [] );
				toast( statusText );
			} )
			.then( () => {
				setLoading();
			} );
	}, [ args, taxonomy ] );

	return { isLoading: loading, termsOptions: options, termsQuery: query };
};
