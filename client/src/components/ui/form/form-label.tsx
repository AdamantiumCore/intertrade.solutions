import type { FC, HTMLProps } from "react";
import classNames from "classnames";

const FormLabel: FC<HTMLProps<HTMLLabelElement> & { isRequired?: boolean }> = ({
	className,
	isRequired,
	...props
}) => <label {...props} className={classNames({ 'after:content-["_*"]': isRequired }, className)} />;

export default FormLabel;
