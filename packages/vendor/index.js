/**
 * External dependencies.
 */
import * as compose from '@wordpress/compose';
import * as element from '@wordpress/element';
import * as hooks from '@wordpress/hooks';
import * as i18n from '@wordpress/i18n';
import * as classnames from 'classnames';
import * as _ from 'lodash';

/**
 * Prevent the conflicts with WordPress's Underscore lib.
 */
if ( ! window.lodash ) {
	_.noConflict();
}

/**
 * Setup the vendor variables used by Carbon Fields.
 */
window.cf = window.cf || {};
window.cf.vendor = [
	[ '@wordpress/compose', compose ],
	[ '@wordpress/element', element ],
	[ '@wordpress/hooks', hooks ],
	[ '@wordpress/i18n', i18n ],
	[ 'classnames', classnames ],
	[ 'lodash', _ ]
].reduce( ( vendors, [ key, implementation ] ) => {
	vendors[ key ] = implementation;

	return vendors;
}, {} );

/**
 * Setup the enviroment variables used by Carbon Fields.
 */
window.cf.hooks = hooks;
window.cf.element = element;