/**
 * Returns an action object used to setup the state when first opening an editor.
 *
 * @param  {Object[]} containers
 * @param  {Object}   fields
 * @return {Object}
 */
export function setupState( containers, fields ) {
	return {
		type: 'SETUP_STATE',
		payload: {
			containers,
			fields
		}
	};
}

/**
 * Returns an action object used to update the field's value.
 *
 * @param  {string} fieldId
 * @param  {mixed}  value
 * @return {Object}
 */
export function updateFieldValue( fieldId, value ) {
	return {
		type: 'UPDATE_FIELD_VALUE',
		payload: {
			fieldId,
			value
		}
	};
}