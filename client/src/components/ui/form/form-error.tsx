import classNames from "classnames";
import type { HTMLAttributes, ClassAttributes, ReactNode } from "react";

interface FormErrorProps extends HTMLAttributes<HTMLDivElement>, ClassAttributes<HTMLDivElement> {
	message?: ReactNode;
}

const FormError = ({ className, message, ...props }: FormErrorProps) =>
	message ? (
		<div {...props} className={classNames("text-rose-500 text-xs mt-1", className)} aria-live='assertive'>
			{message}
		</div>
	) : null;

export default FormError;
