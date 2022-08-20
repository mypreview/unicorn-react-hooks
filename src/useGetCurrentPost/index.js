/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useSelect } from '@wordpress/data';

/**
 * Returns the post currently being edited in its last known saved state, not including unsaved edits.
 * Returns an object containing relevant default post values if the post has not yet been saved.
 *
 * @function
 * @since       1.2.0
 * @name 		useGetCurrentPost
 * @return      {Object}    Returns the post data currently being edited.
 * @example
 *
 * const { postId, postTitle } = useGetCurrentPost();
 */
export default () => {
	const { post, postId, postSlug, postTitle } = useSelect( ( select ) => {
		const { getCurrentPost, getCurrentPostId, getEditedPostAttribute } = select( 'core/editor' );

		return {
			post: getCurrentPost(),
			postId: getCurrentPostId(),
			postSlug: getEditedPostAttribute( 'slug' ),
			postTitle: getEditedPostAttribute( 'title' ),
		};
	} );

	return { post, postId, postSlug, postTitle };
};
