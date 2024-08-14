import React, { ReactNode, MouseEvent } from "react";
import { createRippleEffect } from "./RippleEffect";
import styles from '../styles/RippleButton.module.css';

interface RippleButtonProps {
    children: ReactNode;
    color?: string;
    speed?: number;
    radius?: number;
    width?: number | string;
    height?: number | string;
}

export const RippleButton: React.FC<RippleButtonProps> = ({
    children,
    color = "rgba(255, 255, 255, 0.4)",
    speed = 500,
    radius = 2,
    width = "auto",
    height = "auto",
}) => {

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        createRippleEffect({ event, color, speed });
    };

    const heightStyle =
        typeof height === "number" ? `${height}px` : height || "auto";

    const widthStyle =
        typeof width === "number" ? `${width}%` : width || "auto";

    return (
        <div
            className={styles.rippleButton}
            style={{
                borderRadius: `${radius}px`,
                width: widthStyle,
                height: heightStyle,
                display: "inline-block",
            }}
            onClick={handleClick}
        >
            {children}
        </div>
    );
};

export default RippleButton;
