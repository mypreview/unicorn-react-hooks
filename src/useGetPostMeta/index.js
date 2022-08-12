/**
 * External dependencies
 *
 * @ignore
 */
import get from 'lodash/get';

/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useSelect } from '@wordpress/data';

/**
 * Retrieves a post meta field of the current post.
 *
 * @function
 * @since       1.0.0
 * @name 		useGetPostMeta
 * @param       {string}    metaKey    The meta key to retrieve.
 * @return      {Object}			   An object containing currently viewed post-id and meta field value.
 * @example
 *
 * const { metaValue, postId, postSlug } = useGetPostMeta( 'prefix_blocks_theme_meta' );
 */
export default ( metaKey ) => {
	const { postId, postMeta, postSlug } = useSelect( ( select ) => {
		const { getCurrentPostId, getEditedPostAttribute } = select( 'core/editor' );

		return {
			postId: getCurrentPostId(),
			postMeta: getEditedPostAttribute( 'meta' ),
			postSlug: getEditedPostAttribute( 'slug' ),
		};
	} );

	return { metaValue: get( postMeta, metaKey ), postId, postSlug };
};
