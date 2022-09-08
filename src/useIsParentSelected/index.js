/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useSelect } from '@wordpress/data';

/**
 * Determines whether the block corresponding to the specified client-ID is currently
 * selected with consideration to multi-selection within its parent block.
 *
 * @function
 * @since       1.4.0
 * @name 		useIsParentSelected
 * @param       {string}    clientId    The block’s client id.
 * @return      {boolean}               Whether parent or direct child block is selected.
 * @example
 *
 * const isParentSelected = useIsParentSelected( clientId );
 */
export default ( clientId ) => {
	const isParentSelected = useSelect(
		( select ) => {
			const { isBlockSelected, getBlockHierarchyRootClientId, getSelectedBlockClientId } = select( 'core/block-editor' );
			const isSelected = isBlockSelected( clientId );
			const rootClientId = getBlockHierarchyRootClientId( clientId ); // Get clientID of the parent block.
			const selectedRootClientId = getBlockHierarchyRootClientId( getSelectedBlockClientId() );
			return isSelected || rootClientId === selectedRootClientId;
		},
		[ clientId ]
	);

	return isParentSelected;
};
