/**
 * Internal dependencies.
 */
import { registerFieldType } from '../registry/fields';
import CheckboxField from './checkbox';
import ColorField from './color';
import ComplexField from './complex';
import FileField from './file';
import HiddenField from './hidden';
import HtmlField from './html';
import RadioField from './radio';
import SelectField from './select';
import SetField from './set';
import SidebarField from './sidebar';
import TextField from './text';
import TextareaField from './textarea';

/**
 * Registers the fields.
 */
[
	[ 'checkbox', CheckboxField ],
	[ 'color', ColorField ],
	[ 'complex', ComplexField ],
	[ 'file', FileField ],
	[ 'gravity_form', SelectField ],
	[ 'hidden', HiddenField ],
	[ 'html', HtmlField ],
	[ 'radio', RadioField ],
	[ 'radio_image', RadioField ],
	[ 'select', SelectField ],
	[ 'set', SetField ],
	[ 'sidebar', SidebarField ],
	[ 'text', TextField ],
	[ 'textarea', TextareaField ]
].forEach( ( field ) => registerFieldType( ...field ) );