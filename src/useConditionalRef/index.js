/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useRef } from '@wordpress/element';

/**
 * Conditionally return an instance of `useRef`.
 *
 * @function
 * @since       1.0.0
 * @name 		useConditionalRef
 * @param 	    {boolean}    isSave    	     Whether the field is meant to be rendered on the front-end.
 * @param 	    {any}        initialValue    Initial value used during the initial render.
 * @return      {Object}					 Returns a mutable ref object whose `.current` property is initialized to the passed argument.
 * @example
 *
 * const anchorRef = useConditionalRef( isSave );
 */
export default ( isSave = false, initialValue ) => {
	/**
	 * The following `useRef` hook has been conditionally initialized since
	 * Gutenberg cannot process a React component for the Save output.
	 *
	 * The save parameter can only accept a JavaScript function rather than
	 * a React component, making any hook invalid by throwing a fatal compilation error.
	 *
	 * @ignore
	 */

	// eslint-disable-next-line react-hooks/rules-of-hooks
	return Boolean( isSave ) ? { current: undefined } : useRef( initialValue );
};
