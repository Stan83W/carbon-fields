/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class RichTextField extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			value,
			children,
			onChange
		} = this.props;

		return children( {
			field,
			name,
			value,
			handleChange: onChange
		} );
	}
}

export default RichTextField;