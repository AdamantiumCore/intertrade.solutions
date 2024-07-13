const Link = ({
    href,
    onClick,
    children,
}: Readonly <{
    href: string,
    onClick: any,
    children: React.ReactNode,
}>) => {
    return (
        <a href={href} onClick={onClick} className="transition ease-in-out delay-150 w-max text-purple-600 hover:text-purple-300">{children}</a>
    );
}

export default Link;