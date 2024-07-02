const Button = ({
    type = "button",
    onClick = undefined,
    children,
}: Readonly <{
    type: any,
    onClick?: any,
    children: React.ReactNode,
}>) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="transition ease-in-out delay-150 w-1/3 bg-purple-700 hover:bg-purple-400 text-white text-xl p-2.5 rounded-md"
        >
            {children}
        </button>
    );
}

export default Button;