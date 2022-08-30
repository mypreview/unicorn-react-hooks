/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useEffect, useState } from '@wordpress/element';

/**
 * Get the current size of the browser window.
 *
 * @function
 * @since       1.3.0
 * @name 		useWindowSize
 * @return      {Object}    An object containing the window's width and height.
 * @example
 *
 * const size = useWindowSize();
 */
export default () => {
	// Initialize state with undefined width/height so server and client renders match.
	const [ size, setSize ] = useState( {
		width: undefined,
		height: undefined,
	} );

	useEffect( () => {
		// Handler to call on window resize
		const handleResize = () => {
			// Set window width/height to state
			setSize( {
				width: window.innerWidth,
				height: window.innerHeight,
			} );
		};

		window.addEventListener( 'resize', handleResize );
		handleResize();

		return () => window.removeEventListener( 'resize', handleResize );
	}, [] );

	return size;
};
