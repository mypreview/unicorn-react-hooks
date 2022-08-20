/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useSelect } from '@wordpress/data';

/**
 * Returns an object containing block variations info.
 * The returned object also determines which variation is currently active, and when
 * there are multiple variations annotated as the default one, the last added item is picked.
 *
 * @function
 * @since       1.2.0
 * @name 		useGetBlockVariations
 * @param       {string}    clientId    The block’s client id.
 * @return      {Object}                Returns variations info of a given block id.
 * @example
 *
 * const { defaultVariation, variations } = useGetBlockVariations( '74b85937-4f07-8cafb54f16d4' );
 */
export default ( clientId ) => {
	const { defaultVariation, icon, name, variations, title } = useSelect(
		( select ) => {
			const { getBlockType, getDefaultBlockVariation, getBlockVariations } = select( 'core/blocks' );
			const { getBlock } = select( 'core/block-editor' );
			const { name: _name } = getBlock( clientId );
			const { icon: _icon, title: _title } = getBlockType( _name );

			return {
				defaultVariation: getDefaultBlockVariation( _name, 'block' ),
				icon: _icon,
				name: _name,
				variations: getBlockVariations( _name, 'block' ),
				title: _title,
			};
		},
		[ clientId ]
	);

	return { defaultVariation, icon, name, variations, title };
};
