/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useSelect } from '@wordpress/data';

/**
 * Returns an object containing the given registered block meta-data.
 *
 * @function
 * @since       1.5.0
 * @name 		useGetBlockType
 * @param       {string}    clientId    The block’s client id.
 * @return      {Object}                Returns the given block meta-data.
 * @example
 *
 * const currentBlock = useGetBlockType( '74b85937-4f07-8cafb54f16d4' );
 */
export default ( clientId ) => {
	const currentBlock = useSelect(
		( select ) => {
			const { getBlockType } = select( 'core/blocks' );
			const { getBlock } = select( 'core/block-editor' );
			const { name } = getBlock( clientId );

			return getBlockType( name );
		},
		[ clientId ]
	);

	return currentBlock;
};
