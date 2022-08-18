/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useSelect } from '@wordpress/data';

/**
 * Retrieves the current post object given the post ID and post-type.
 *
 * @function
 * @since       1.0.0
 * @name 		useGetPost
 * @param       {number}     postId      Post ID.
 * @param       {string}     postType    Post-type name (key).
 * @return      {Object}				 Returns the post object.
 * @example
 *
 * const post = useGetPost( 748, 'page' );
 */
export default ( postId, postType ) => {
	const { post } = useSelect(
		( select ) => {
			const { getEditedEntityRecord } = select( 'core' );
			const _post = getEditedEntityRecord( 'postType', postType, postId );

			return {
				post: _post,
			};
		},
		[ postId, postType ]
	);

	return post;
};
