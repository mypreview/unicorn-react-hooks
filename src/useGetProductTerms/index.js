/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { map, pick } from 'lodash';

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
 * Retrieve a list of product taxonomy terms and refresh
 * the list when any direct arguments change.
 *
 * @function
 * @since       1.0.0
 * @name 		useGetProductTerms
 * @param       {string}    taxonomy    Taxonomy name.
 * @param       {Object}    args    	Arguments to be passed to the apiFetch method.
 * @return      {Object} 			    List of terms retrieved from the API along with a list of options to select from.
 * @example
 *
 * const { termsOptions, termsQuery } = useGetProductTerms( 'categories' );
 */
export default ( taxonomy, args = {} ) => {
	const [ options, setOptions ] = useState( [] );
	const [ query, setQuery ] = useState( '' );
	const [ loading, setLoading ] = useToggle();
	const toast = useToast();
	const { errorMessage, ...otherArgs } = args;

	useDeepCompareEffect( () => {
		setLoading();
		apiClient
			.get( `/wc/v3/products/${ taxonomy }`, { per_page: -1, post_status: 'publish', ...otherArgs } )
			.then( ( data ) => {
				setOptions( map( data, ( term ) => pick( term, [ 'id', 'name', 'parent' ] ) ) );
				setQuery( data );
			} )
			.catch( ( err ) => {
				setQuery( [] );
				toast( errorMessage || err?.message );
			} )
			.then( () => {
				setLoading();
			} );
	}, [ args ] );

	return { isLoading: loading, termsOptions: options, termsQuery: query };
};
