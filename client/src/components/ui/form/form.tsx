import type { ClassAttributes, FC, HTMLAttributes } from "react";

const Form: FC<HTMLAttributes<HTMLFormElement> & ClassAttributes<HTMLFormElement>> = ({
	className,
	...props
}) => <form {...props} className={className} />;

export default Form;
