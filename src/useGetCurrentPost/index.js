/**
 * Data module to manage application state for both plugins and WordPress itself.
 * The data module is built upon and shares many of the same core principles of Redux.
 *
 * @ignore
 */
import { useSelect } from '@wordpress/data';

/**
 * Retrieves the current post object given the post ID and post-type.
 *
 * @function
 * @since       1.0.0
 * @name 		useGetCurrentPost
 * @param       {number}     postId      Post ID.
 * @param       {string}     postType    Post-type name (key).
 * @return      {Object}				 Returns the post object.
 * @example
 *
 * const currentPost = useGetCurrentPost( 748, 'page' );
 */
export default ( postId, postType ) => {
	const { currentPost } = useSelect(
		( select ) => {
			const { getEditedEntityRecord } = select( 'core' );
			const _currentPost = getEditedEntityRecord( 'postType', postType, postId );

			return {
				currentPost: _currentPost,
			};
		},
		[ postId, postType ]
	);

	return currentPost;
};
