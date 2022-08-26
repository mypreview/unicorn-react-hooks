/**
 * External dependencies
 *
 * @ignore
 */
import { defaultTo, get } from 'lodash';

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
 * @since       1.2.0
 * @name 		useGetPostMeta
 * @param       {string}    metaKey    The meta key to retrieve.
 * @return      {Object}			   An object containing currently viewed post-id and meta field value.
 * @example
 *
 * const { metaValue, postId, postType } = useGetPostMeta( 'meta_key' );
 */
export default ( metaKey ) => {
	const { postId, postMeta, postSlug, postTitle, postType } = useSelect( ( select ) => {
		const { getCurrentPostId, getCurrentPostType, getEditedPostAttribute, getPostTypeLabel } = select( 'core/editor' );

		return {
			postId: getCurrentPostId(),
			postMeta: getEditedPostAttribute( 'meta' ),
			postSlug: getEditedPostAttribute( 'slug' ),
			postTitle: getEditedPostAttribute( 'title' ),
			postType: { key: getCurrentPostType(), label: getPostTypeLabel() },
		};
	} );

	return { metaValue: defaultTo( get( postMeta, metaKey ), postMeta ), postId, postSlug, postTitle, postType };
};
