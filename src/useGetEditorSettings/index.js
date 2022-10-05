/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useSelect } from '@wordpress/data';

/**
 * Returns an object containing relevant editor settings.
 *
 * @function
 * @since       1.6.0
 * @name 		useGetEditorSettings
 * @return      {Object}    Returns editor settings object.
 * @example
 *
 * const { colors, fontSizes } = useGetEditorSettings();
 */
export default () => {
	const settings = useSelect( ( select ) => {
		const { getSettings } = select( 'core/block-editor' );
		return getSettings();
	}, [] );

	return settings;
};
