import classNames from "classnames";
import React from "react";
import { BiFemaleSign } from "react-icons/bi";

export default function Button({
    variant = "primary",
    className = "null",
    children,
    fullWidth = false,
    ...props
}) {
    const _classes = classNames(
        "border rounded-md font-medium py-2 px-4 outline-none select-none",
        "hover:shadow-[0_0_0_2px_#ddd] focus:shadow-[0_0_0_3px_#ddd] text-base",
        {
            [className]: className !== "null",
            "bg-accent border-accent text-white": variant === "primary",
            "bg-black border-black text-white": variant === "dark",
            " border-black text-black": variant === "dark-outline",
            "text-accent border-accent": variant === "primary-outline",
            "bg-transparent": variant.endsWith("-outline"),
            "block w-full text-center": fullWidth,
        }
    );
    return (
        <button className={_classes} {...props}>
            {children}
        </button>
    );
}
