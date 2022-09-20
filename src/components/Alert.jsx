import RenderModals from "./RenderModals";
import classNames from "classnames";
// import { useEffect, useState } from "react";
import {
    BiX,
    BiError,
    BiInfoCircle,
    BiCheckCircle,
    BiXCircle,
} from "react-icons/bi";
import Button from "./Button";
import { useEffect } from "react";

export default function Alert({
    isOpen = false,
    maxWidth = 450,
    position = "start",
    close,
    type = "success",
    title = "",
    message = "Alert message",
    button,
    timeout,
    timeoutCallback,
}) {
    const _classes = classNames(
        "z-[9999] fixed left-1/2 -translate-x-1/2 fade-in",
        "w-[90%] border-l-[4px] shadow-lg bg-white p-4",
        {
            ["border-[#23A047]"]: type === "success",
            ["border-[#0052EA]"]: type === "info",
            ["border-[#FCA004]"]: type === "warning",
            ["border-[#F44336]"]: type === "error",
            "top-[6%]": position === "start",
            "top-[50%] -translate-y-1/2": position === "center",
            "bottom-[6%]": position === "end",
        }
    );

    useEffect(() => {
        if (!timeout || !isOpen) return;
        setTimeout(() => {
            timeoutCallback && timeoutCallback();
            close();
        }, timeout);
    });

    if (!isOpen) return null;
    return (
        <RenderModals>
            <div
                style={{
                    maxWidth,
                }}
                className={_classes}
            >
                <div className="flex gap-4 justify-between">
                    <div>
                        {type === "success" && (
                            <BiCheckCircle color="#23A047" size="20px" />
                        )}
                        {type === "info" && (
                            <BiInfoCircle color="#0052EA" size="20px" />
                        )}
                        {type === "warning" && (
                            <BiError color="#FCA004" size="20px" />
                        )}
                        {type === "error" && (
                            <BiXCircle color="#F44336" size="20px" />
                        )}
                    </div>
                    <div className="grow">
                        {title && <h5>{title}</h5>}
                        <p>{message}</p>
                    </div>
                    <div
                        onClick={close}
                        className="w-6 h-6 rounded-sm hover:bg-black/10 cursor-pointer grid place-items-center"
                    >
                        <BiX size="22px" />
                    </div>
                </div>
                <div onClick={close} className="flex justify-end mt-4">
                    {button && button}
                </div>
            </div>
        </RenderModals>
    );
}
