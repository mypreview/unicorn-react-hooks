/**
 * WordPress specific abstraction layer atop React.
 *
 * @ignore
 */
import { useCallback, useState } from '@wordpress/element';

/**
 * This hook takes an initial value for an input field
 * and updates it when the `onChange` event raises.
 *
 * @function
 * @since       1.0.0
 * @name 		useInputValue
 * @param  	    {string}    initialValue    Initial value of the field.
 * @return      {Array}					    Returns a stateful value, and a function to update it.
 * @example
 *
 * const [ value, setValue ] = useInputValue( 'Hello' );
 * <TextControl onChange={ setValue } value={ value } />
 */
export default ( initialValue = '' ) => {
	const [ value, setValue ] = useState( initialValue );
	const onChange = useCallback( ( event ) => {
		setValue( event?.currentTarget?.value || event );
	}, [] );

	return [ value, onChange ];
};
