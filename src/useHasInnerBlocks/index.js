/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useSelect } from '@wordpress/data';

/**
 * Determines whether a block has already inner blocks inserted.
 *
 * @function
 * @since       1.2.0
 * @name 		useHasInnerBlocks
 * @param       {string}    clientId    The block’s client id.
 * @return      {boolean}               Whether a block has inner blocks inserted.
 * @example
 *
 * const hasInnerBlocks = useHasInnerBlocks( '74b85937-4f07-8cafb54f16d4' );
 */
export default ( clientId ) => {
	const hasInnerBlocks = useSelect(
		( select ) => {
			const { getBlock } = select( 'core/block-editor' );
			const block = getBlock( clientId );

			return !! ( block && block.innerBlocks.length );
		},
		[ clientId ]
	);

	return hasInnerBlocks;
};
