import classNames from "classnames";

export default function Container({ className = "null", children, ...props }) {
    const _classes = classNames("container", {
        [className]: className !== "null",
    });
    return <div className={_classes}>{children}</div>;
}
