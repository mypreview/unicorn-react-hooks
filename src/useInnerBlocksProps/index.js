/* eslint-disable import/named, @wordpress/no-unsafe-wp-apis */

/**
 * External dependencies
 *
 * @ignore
 */
import defaultTo from 'lodash/defaultTo';

/**
 * React hook that is used to mark the inner-blocks wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @ignore
 */
import { useInnerBlocksProps, __experimentalUseInnerBlocksProps } from '@wordpress/block-editor';

/**
 * This module merely adds backward compatibility for the usage of experimental
 * `useInnerBlocksProps` in projects created using WordPress versions prior to 5.9.
 *
 * @since      1.0.0
 * @name       useInnerBlocksProps
 * @example
 *
 * const blockProps = useBlockProps( { className: 'my-class' } );
 * const innerBlocksProps = useInnerBlocksProps(
 *     blockProps,
 *     { allowedBlocks: [ 'core/heading', 'core/paragraph', 'core/image' ] }
 * );
 */
export default defaultTo( __experimentalUseInnerBlocksProps, useInnerBlocksProps );
