/**
 * WordPress dependencies
 *
 * @ignore
 */
import { getBlockSupport } from '@wordpress/blocks';
import { useMemo } from '@wordpress/element';

/**
 * Retrieves the block support value for the "Layout" settings to be used in the preview.
 *
 * @function
 * @since       1.0.0
 * @name 		useGetBlockLayout
 * @param       {string}    blockTypeOrName    The name for a block is a unique string that identifies a block.
 * @return      {Object} 			           Block level "Layout" settings object.
 * @example
 *
 * const { default } = useGetBlockLayout( 'core/social-links' );
 *
 * // { 'type': 'flex' }
 */
export default ( blockTypeOrName ) => {
	const layoutBlockSupportConfig = useMemo( () => getBlockSupport( blockTypeOrName, '__experimentalLayout' ) || {}, [ blockTypeOrName ] );
	return layoutBlockSupportConfig;
};
