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
 * @since       1.1.0
 * @name 		useGetPostMeta
 * @param       {string}    metaKey    The meta key to retrieve.
 * @return      {Object}			   An object containing currently viewed post-id and meta field value.
 * @example
 *
 * const { metaValue, postId, postSlug, postType } = useGetPostMeta( 'meta_key' );
 */
export default ( metaKey ) => {
	const { postId, postMeta, postSlug, postType } = useSelect( ( select ) => {
		const { getCurrentPostId, getCurrentPostType, getEditedPostAttribute, getPostTypeLabel } = select( 'core/editor' );

		return {
			postId: getCurrentPostId(),
			postMeta: getEditedPostAttribute( 'meta' ),
			postSlug: getEditedPostAttribute( 'slug' ),
			postType: { key: getCurrentPostType(), label: getPostTypeLabel() },
		};
	} );

	return { metaValue: get( postMeta, metaKey ), postId, postSlug, postType };
};
