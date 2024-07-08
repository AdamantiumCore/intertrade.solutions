import { HTMLProps, forwardRef } from "react";

interface FormCheckboxProps extends HTMLProps<HTMLInputElement> {
	label: string;
}

const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
	({ className, checked, id, label, ...props }, ref) => (
		<label htmlFor={id} className='flex w-fit items-center'>
			<input
				{...props}
				id={id}
				type='checkbox'
				className={className}
				ref={ref}
				checked={checked}
			/>
			<span className='text-[15px] ml-2'>{label}</span>
		</label>
	)
);

FormCheckbox.displayName = "FormCheckbox";
export default FormCheckbox;
