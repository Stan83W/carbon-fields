/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withHandlers, setStatic } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_TEXT } from 'fields/constants';

/**
 * Render a text input field.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleChange
 * @return {React.Element}
 */
export const TextField = ({ name, field, handleChange }) => {
	return <Field field={field}>
		<input
			type="text"
			id={field.id}
			name={name}
			value={field.value}
			disabled={!field.ui.is_visible}
			className="regular-text"
			onChange={handleChange} />
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
TextField.propTypes = {
	name: PropTypes.string.isRequired,
	field: PropTypes.shape({
		id: PropTypes.string.isRequired,
		value: PropTypes.string,
	}).isRequired,
	handleChange: PropTypes.func.isRequired,
};

/**
 * Sync the input value with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleChange = ({ field, updateField }) => ({ target: { value } }) => updateField(field.id, { value });

export default setStatic('type', [TYPE_TEXT])(
	compose(
		withStore(),
		withSetup(),
		withHandlers({ handleChange })
	)(TextField)
);