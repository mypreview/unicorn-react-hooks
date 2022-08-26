/**
 * External dependencies
 *
 * @ignore
 */
import { defaultTo, identity, pickBy } from 'lodash';
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
import { useToast } from '../';
import { apiClient } from '../utils';

/**
 * Retrieve list of HTML nodes genearted for each post item.
 *
 * @function
 * @since       1.0.0
 * @name 		useGetNodeList
 * @param       {string}      endpoint     API node endpoint.
 * @param       {Object}      args    	   Arguments to be passed to the apiFetch method.
 * @param       {Function}    predicate    The function invoked per property. The predicate is invoked with two arguments: (value, key).
 * @return      {Array}                    List of HTML nodes to be referred to when each post item looped over.
 * @example
 *
 * const nodeList = useGetNodeList( 'namespace-recent-posts/v1/nodes' );
 */
export default ( endpoint, args = {}, predicate = identity ) => {
	const [ nodeList, setNodeList ] = useState( '' );
	const toast = useToast();
	const { errorMessage, ...otherArgs } = args;

	useDeepCompareEffect( () => {
		apiClient
			.get( endpoint, otherArgs )
			.then( ( data ) => {
				setNodeList( pickBy( data, predicate ) );
			} )
			.catch( ( err ) => {
				setNodeList( [] );
				toast( defaultTo( errorMessage, err?.message ) );
			} );
	}, [ args, endpoint ] );

	return nodeList;
};
