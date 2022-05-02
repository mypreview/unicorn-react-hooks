/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { find, parseInt } from 'lodash';

/**
 * WordPress specific abstraction layer atop React.
 *
 * @ignore
 */
import { useEffect, useState } from '@wordpress/element';

/**
 * Finds the selected post object based on the given post id
 * and maintains the state of change when it happens.
 *
 * @function
 * @since       1.0.0
 * @name 		useFindPostById
 * @param       {number}         postId        Selected post id.
 * @param       {Array}          postsQuery    List of posts retrieved from the API query.
 * @return      {null|Object}                  Post object.
 * @example
 *
 * const post = useFindPostById( postId, postsQuery );
 */
export default ( postId, postsQuery ) => {
	const [ post, setPost ] = useState( null );

	useEffect( () => {
		setPost( find( postsQuery, [ 'id', parseInt( postId ) ] ) );
	}, [ postsQuery, postId ] );

	return post;
};
