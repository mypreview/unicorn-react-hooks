/**
 * External dependencies
 *
 * @ignore
 */
import apiFetch from '@wordpress/api-fetch';
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
