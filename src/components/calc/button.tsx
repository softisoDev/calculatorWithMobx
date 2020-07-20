import React, {FC} from "react";

const colors = {
    danger: "btn-danger",
    warning: "btn-warning",
    default: "btn-default",
    info: "btn-info",
    dark: "btn-dark",
    success: "btn-success",
    light: "btn-light",
    link: "btn-link",
    primary: "btn-primary",
}

interface IProps {
    type: "button" | "submit" | "reset";
    value?: string | number;
    color?: string;
    className?: string,
    id?: string,
    onClick?: (e?) => void,
    text: string | number,
}

const CalcButton: FC<IProps> = ({text, color, ...props}) => {

    const className = "btn " + colors[color!] + " " + props.className;

    return (
        <button {...props} className={className}>{text}</button>
    );
}

export default CalcButton;