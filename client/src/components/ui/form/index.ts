import Form from "./form";
import FormCheckbox from "./form-checkbox";
import FormControl from "./form-control";
import FormLabel from "./form-label";
import FormInput from "./form-input";
import FormTextArea from "./form-textarea";
import FormError from "./form-error";
import FormSelect from "./form-select";

export default Object.assign(Form, {
	Checkbox: FormCheckbox,
	Control: FormControl,
	Error: FormError,
	Input: FormInput,
	Label: FormLabel,
	TextArea: FormTextArea,
	Select: FormSelect,
});
