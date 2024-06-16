"use client"

import {
    forwardRef,
    useRef,
    ForwardRefExoticComponent,
    LegacyRef,
    useState,
    useEffect
}
from "react";
import { createPortal } from "react-dom";

type Props = {
    open: boolean,
    children: React.ReactNode,
    handleClose: any,
    ref: LegacyRef<any>
}

// const Modal: ForwardRefExoticComponent<Props> = 
// forwardRef(function Modal({
//     open,
//     children,
//     handleClose
// }, ref) {
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
        <dialog ref={dialog} className="">
            {children}
            <form method="dialog">
                <button onClick={handleClose}>Close</button>
            </form>
        </dialog>,
        document.body
    ) : null;
};

export default Modal;