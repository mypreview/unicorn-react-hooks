/**
 * External dependencies
 *
 * @ignore
 */
import { find, parseInt } from 'lodash';

/**
 * WordPress dependencies
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
 * @param       {string}         needle		   The searched key/id.
 * @return      {null|Object}                  Post object.
 * @example
 *
 * const post = useFindPostById( postId, postsQuery );
 */
export default ( postId, postsQuery, needle ) => {
	const [ post, setPost ] = useState( null );

	useEffect( () => {
		setPost( find( postsQuery, [ needle || 'id', parseInt( postId ) ] ) );
	}, [ postsQuery, postId ] );

	return post;
};
