/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useSelect } from '@wordpress/data';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Retrieves the current site data or object.
 *
 * @function
 * @since       1.0.0
 * @name 		useGetSiteData
 * @param       {null|Array}    dependencies    An array of optional dependencies to refresh the hook output.
 * @return      {Object}				    	Returns site data and title within an object.
 * @example
 *
 * const { siteTitle } = useGetSiteData();
 */
export default ( dependencies = [] ) => {
	const { siteData, siteTitle } = useSelect( ( select ) => {
		const { getEntityRecord } = select( 'core' );
		const data = getEntityRecord( 'root', '__unstableBase' );

		return {
			siteData: data,
			siteTitle: decodeEntities( data?.name ),
		};
	}, dependencies );

	return { siteData, siteTitle };
};
