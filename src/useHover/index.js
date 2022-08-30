/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useEffect, useRef, useState } from '@wordpress/element';

/**
 * Detect whether the mouse is hovering an element.
 *
 * @function
 * @since       1.3.0
 * @name 		useHover
 * @return      {Object}    A ref and a boolean value indicating whether the element with that ref is currently being hovered.
 * @example
 *
 * const [ hoverRef, isHovered ] = useHover();
 *
 * return <div ref={hoverRef}>{ isHovered ? "😁" : "☹️" }</div>;
 */
export default () => {
	const ref = useRef( null );
	const [ value, setValue ] = useState( false );
	const handleMouseOver = () => setValue( true );
	const handleMouseOut = () => setValue( false );

	useEffect(
		() => {
			const node = ref.current;
			if ( node ) {
				node.addEventListener( 'mouseover', handleMouseOver );
				node.addEventListener( 'mouseout', handleMouseOut );
				return () => {
					node.removeEventListener( 'mouseover', handleMouseOver );
					node.removeEventListener( 'mouseout', handleMouseOut );
				};
			}
		},
		[ ref.current ] // Recall only if ref changes
	);

	return [ ref, value ];
};
