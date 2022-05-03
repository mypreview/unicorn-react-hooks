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
 * Retrieve list of product posts and maintain refreshing
 * this list when any of the direct arguments changed.
 *
 * @function
 * @since       1.0.0
 * @name 		useGetProducts
 * @param       {Object}    args    	Arguments to be passed to the apiFetch method.
 * @param       {string}    clientId    The block’s client id.
 * @return      {Object} 			   	List of posts retrieved from the API along with a list of options to select from.
 * @example
 *
 * const { productsOptions, productsQuery } = useGetProducts( { order: 'asc' }, clientId );
 */
export default ( args = {}, clientId ) => {
	const [ options, setOptions ] = useState( [] );
	const [ query, setQuery ] = useState( '' );
	const [ loading, setLoading ] = useToggle();
	const toast = useToast();
	const { errorMessage, ...otherArgs } = args;

	useDeepCompareEffect( () => {
		setLoading();
		apiClient
			.get( '/wc/v3/products', { per_page: -1, status: 'publish', ...otherArgs } )
			.then( ( data ) => {
				setOptions( selectOptions( data, { id: 'value', name: 'label' }, [] ) );
				setQuery( data );
			} )
			.catch( ( err ) => {
				setQuery( [] );
				toast( errorMessage || err?.message );
			} )
			.then( () => {
				setLoading();
			} );
	}, [ args, clientId ] );

	return { isLoading: loading, productsOptions: options, productsQuery: query };
};
