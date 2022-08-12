/**
 * External dependencies
 *
 * @ignore
 */
import { ifArray, filterCollectionByPredicate } from '@mypreview/unicorn-js-utils';
import slice from 'lodash/slice';

/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useMemo } from '@wordpress/element';

/**
 * Determines whether the current WordPress query has posts to loop over,
 * and slices the query according to the maximum limit determined.
 *
 * @function
 * @since       1.0.0
 * @name 		usePreparePosts
 * @param       {Array}     ids      Handpicked post ids.
 * @param       {number}    limit    Maximum number of posts to show.
 * @param       {Array}     query    List of posts retrieved from the API query.
 * @return      {Object} 			 Sliced query, maximum number of available posts, and whether there are posts to loop over.
 * @example
 *
 * const { havePosts, maxLimit, slicedQuery } = usePreparePosts( [2], 3, [ { id: 1, title: 'Post A' }, { id: 2, title: 'Post B' } ] );
 */
export default ( ids = [], limit = 3, query ) => {
	const { havePosts, maxLimit, slicedQuery } = useMemo(
		() => ( {
			havePosts: ifArray( query ),
			maxLimit: query?.length,
			slicedQuery: ifArray( ids ) && ifArray( query ) ? filterCollectionByPredicate( ids, query ) : slice( query, 0, limit ),
		} ),
		[ ids, limit, query ]
	);

	return { havePosts, maxLimit, slicedQuery };
};
