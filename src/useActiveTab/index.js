/**
 * External dependencies
 *
 * @ignore
 */
import { defaultTo, get, nth } from 'lodash';

/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useState } from '@wordpress/element';

/**
 * Maintains and determines the current state of the active tab.
 *
 * @function
 * @since       1.0.0
 * @name 		useActiveTab
 * @param 	    {string}    initialTabName    Initial tab element to be selected upon mounting of component.
 * @param 	    {Array}     tabs              Tabs stored from the previous state.
 * @return      {Array}                       Returns a stateful value, and a function to update it.
 * @example
 *
 * const [ activeTab, setActiveTab ] = useActiveTab( initialTabName, tabs );
 */
export default ( initialTabName, tabs ) => {
	const [ activeTab, setActiveTab ] = useState( defaultTo( initialTabName, get( nth( tabs ), 'slug' ) ) );
	return [ activeTab, setActiveTab ];
};
