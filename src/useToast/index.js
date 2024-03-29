/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useDispatch } from '@wordpress/data';

/**
 * This hook allows for generating custom (notification) toast messages.
 *
 * @function
 * @since       1.0.0
 * @name 		useToast
 * @return      {Function}    A function that could be called to initiate toast messages.
 * @example
 *
 * const toast = useToast();
 * toast( 'Text to display as a toast message!' );
 */
export default () => {
	const { createNotice } = useDispatch( 'core/notices' );
	const toast = ( text, args, type = 'error' ) => createNotice( type, text, { isDismissible: true, type: 'snackbar', ...args } );

	return toast;
};
