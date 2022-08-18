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
 * @since       1.1.0
 * @name 		useGetCurrentPost
 * @return      {Object}    Returns the post object.
 * @example
 *
 * const currentPost = useGetCurrentPost();
 */
export default () => {
	const { post, postId } = useSelect( ( select ) => {
		const { getCurrentPost, getCurrentPostId } = select( 'core/editor' );

		return {
			post: getCurrentPost(),
			postId: getCurrentPostId(),
		};
	} );

	return { post, postId };
};
