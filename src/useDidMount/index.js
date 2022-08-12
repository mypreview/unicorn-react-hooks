/**
 * External dependencies
 *
 * @ignore
 */
import isFunction from 'lodash/isFunction';

/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useEffect } from '@wordpress/element';

/**
 * This hook mimicks the `componentDidMount` hook for React.
 *
 * @function
 * @since       1.0.0
 * @name 		useDidMount
 * @param  	    {Function}    callback    Function to be called when component is mounted.
 * @return      {void}
 * @example
 *
 * useDidMount( () => {
 *     console.log( 'Mounted!' );
 * } );
 */
export default ( callback ) => {
	useEffect( () => {
		if ( isFunction( callback ) ) {
			callback();
		}
	}, [] );
};
