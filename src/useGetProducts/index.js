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
 * Retrieve a list of product posts and refresh
 * the list when any direct arguments change.
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

	useDeepCompareEffect( () => {
		setLoading();
		apiClient
			.get( '/wc/v3/products', { per_page: -1, status: 'publish', ...args } )
			.then( ( data ) => {
				setOptions( selectOptions( data, { id: 'value', name: 'label' }, [] ) );
				setQuery( data );
			} )
			.catch( ( { statusText } ) => {
				setQuery( [] );
				toast( statusText );
			} )
			.then( () => {
				setLoading();
			} );
	}, [ args, clientId ] );

	return { isLoading: loading, productsOptions: options, productsQuery: query };
};
