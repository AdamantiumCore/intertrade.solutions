"use client"

import {
    useRef,
    useState,
    useEffect
}
from "react";
import { createPortal } from "react-dom";

function Modal({
    open,
    children,
    handleClose
}: Readonly<{
    open: boolean, 
    children: React.ReactNode, 
    handleClose: any
}>) {
    const dialog = useRef<HTMLDialogElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    useEffect(() => {
        if (open) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [open])

    useEffect(() => {
        if (isOpen) {
            dialog.current?.showModal();
        } else {
            dialog.current?.close();
        }
    }, [isOpen]);

    return mounted ? createPortal(
        <dialog ref={dialog} className="relative rounded-lg">
            {children}
            <form method="dialog">
                <a href="#" onClick={handleClose} className="transition ease-in-out delay-150 w-max text-purple-600 hover:text-purple-300 absolute top-0 right-0 p-5">Close</a>
            </form>
        </dialog>,
        document.body
    ) : null;
};

export default Modal;