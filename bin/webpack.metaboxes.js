/**
 * External dependencies.
 */
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );

/**
 * Internal dependencies.
 */
const base = require( './webpack.base' );
const paths = require( './paths' );
const wpPackages = require( './wp-packages' );

const config = {
	entry: {
		metaboxes: './packages/metaboxes/index.js'
	},
	externals: {
		'react': [ 'cf', 'vendor', 'react' ],
		'react-dom': [ 'cf', 'vendor', 'react-dom' ],
		'refract-callbag': [ 'cf', 'vendor', 'refract-callbag' ],
		'callbag-basics': [ 'cf', 'vendor', 'callbag-basics' ],
		'classnames': [ 'cf', 'vendor', 'classnames' ],
		'@carbon-fields/core': [ 'cf', 'core' ]
	}
};

module.exports = [
	merge( base, config, {
		output: {
			path: paths.gutenbergBuildPath
		},
		externals: Object.assign( {}, wpPackages.externals, {
			'lodash': [ 'lodash' ]
		} )
	} ),
	merge( base, config, {
		output: {
			path: paths.classicBuildPath
		},
		externals: Object.assign( {}, wpPackages.proxyExternals, {
			'lodash': [ 'cf', 'vendor', 'lodash' ]
		} ),
		plugins: [
			new webpack.ProvidePlugin( {
				'wp.element': '@wordpress/element'
			} )
		]
	} )
];
