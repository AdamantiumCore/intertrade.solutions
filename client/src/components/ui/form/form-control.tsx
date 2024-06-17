import type { FC, HTMLProps } from "react";

const FormControl: FC<HTMLProps<HTMLDivElement>> = ({ className, ...props }) => (
	<div {...props} className={className} />
);

export default FormControl;
