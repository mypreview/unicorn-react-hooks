/**
 * Utility to make WordPress REST API requests. It's a wrapper around `window.fetch`.
 *
 * @ignore
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * This packages includes a library of generic WordPress components to be used for
 * creating common UI elements shared between screens and features of the WordPress dashboard.
 *
 * @ignore
 */
import { addQueryArgs } from '@wordpress/url';

/**
 * Dispatches a control action for triggering an api fetch call.
 *
 * @ignore
 * @since     1.0.0
 * @param     {string}     endpoint    API endpoint.
 * @param     {Object}     args    	   Arguments to be passed along with the request.
 * @return    {Promise}    			   A promise representing the request processed via the registered middlewares.
 */
function get( endpoint, args = {} ) {
	return apiFetch( { method: 'GET', path: addQueryArgs( endpoint, args ) } );
}

export default { get };
