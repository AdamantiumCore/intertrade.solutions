const Label = ({
    htmlFor,
    children,
}: Readonly <{
    htmlFor: string,
    children: React.ReactNode,
}>) => {
    return (
        <label
            htmlFor={htmlFor}
            className="text-slate-700 text-xs"
        >
            {children}
        </label>
    );
}

export default Label;