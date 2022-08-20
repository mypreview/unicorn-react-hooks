/**
 * WordPress dependencies
 *
 * @ignore
 */
import { useSelect } from '@wordpress/data';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Retrieves the author of the current post.
 *
 * @function
 * @since       1.2.0
 * @name 		useGetAuthorData
 * @param       {null|Array}    dependencies    An array of optional dependencies to refresh the hook output.
 * @return      {Object}				    	Returns u data and title within an object.
 * @example
 *
 * const { authorId, authorEmail } = useGetAuthorData();
 */
export default ( dependencies = [] ) => {
	const { author, authorId, authorEmail, authorFirstName, authorLastName, authorLocale, authorNickname } = useSelect( ( select ) => {
		const { getUser } = select( 'core' );
		const { getEditedPostAttribute } = select( 'core/editor' );
		const _authorId = getEditedPostAttribute( 'author' );
		const _author = getUser( _authorId ) || {};
		const { email: _email, first_name: _firstName, last_name: _lastName, locale: _locale, nickname: _nickname } = _author;

		return {
			author: _author,
			authorId: _authorId,
			authorEmail: _email,
			authorFirstName: decodeEntities( _firstName ),
			authorLastName: decodeEntities( _lastName ),
			authorLocale: _locale,
			authorNickname: decodeEntities( _nickname ),
		};
	}, dependencies );

	return { author, authorId, authorEmail, authorFirstName, authorLastName, authorLocale, authorNickname };
};
