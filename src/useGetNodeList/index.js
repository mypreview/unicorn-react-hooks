/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { identity, pickBy } from 'lodash';

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
 * API connection interface for setting and receiveing API key.
 *
 * @ignore
 */
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
				toast( errorMessage || err?.message );
			} );
	}, [ args, endpoint ] );

	return nodeList;
};
