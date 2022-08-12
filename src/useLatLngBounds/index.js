/**
 * External dependencies
 *
 * @ignore
 */
import nth from 'lodash/nth';
import Geocode from 'react-geocode';

/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 *
 * @ignore
 */
import { useDidMount } from '../';

/**
 * Generates latitude & longitude from a given address.
 *
 * @function
 * @since       1.0.0
 * @name 		useLatLngBounds
 * @param 	    {string}          address    Address.
 * @param       {string}          apiKey     GoogleMaps API key.
 * @param       {string}          locale 	 Region and language code of the parsed address.
 * @return      {Object|string}				 latitude & longitude object or error message.
 * @example
 *
 * const latLng = useLatLngBounds( 'Skyland Istanbul, Sarıyer, Turkey', 'H7ZH7p3dHa24...', 'en );
 */
export default ( address = '', apiKey = '', locale = 'en' ) => {
	const [ latLng, setLatLng ] = useState( { lat: 0, lng: 0 } );

	useDidMount( () => {
		Geocode.setLanguage( locale );
		Geocode.setRegion( locale );
	} );

	useEffect( () => {
		Geocode.setApiKey( apiKey );
		Geocode.fromAddress( address )
			.then( ( { results, status } ) => {
				if ( 'OK' === status ) {
					const {
						geometry: { location },
					} = nth( results );
					setLatLng( location || {} );
				}
			} )
			.catch( ( { message } ) => {
				setLatLng( message.toString() );
			} );
	}, [ address, apiKey ] );

	return latLng;
};
