import classNames from "classnames";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";

export default function Modal({
    isOpen = false,
    maxWidth = 450,
    position = "center",
    close,
    children,
}) {
    useEffect(() => {
        function closeWhenUserClickEscape(e) {
            if (e.key === "Escape") close();
        }
        window.addEventListener("keyup", closeWhenUserClickEscape);
        return () => {
            window.removeEventListener("keyup", closeWhenUserClickEscape);
        };
    });
    const _classes = classNames(
        "bg-white rounded-md w-[95%] slide-down border",
        {
            "self-start": position === "start",
            "self-center": position === "center",
            "self-end": position === "end",
        }
    );
    if (!isOpen) return null;
    return createPortal(
        <div className="fixed py-[5%] z-[999] w-screen h-screen top-0 left-0 bg-black/20 flex justify-center">
            <div
                style={{
                    maxWidth,
                }}
                className={_classes}
            >
                <div className="flex justify-end px-4 pt-4">
                    <div
                        onClick={close}
                        className="inline-block cursor-pointer p-1 text-gray-600 rounded-md bg-gray-50 hover:bg-gray-200"
                    >
                        <BiX size="22px" />
                    </div>
                </div>
                <div className="w-full p-4 md:p-6">{children}</div>
            </div>
        </div>,
        document.getElementById("modals-container")
    );
}
