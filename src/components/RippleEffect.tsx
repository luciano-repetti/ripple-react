import React, { MouseEvent } from "react";

export interface RippleEffectProps {
    event: MouseEvent<HTMLDivElement>;
    color: string;
    speed: number;
}

export const createRippleEffect = ({ event, color, speed }: RippleEffectProps) => {
    const button = event.currentTarget;
    const ripple = document.createElement("div");
    button.appendChild(ripple);

    const d = Math.max(button.clientWidth, button.clientHeight);
    ripple.style.width = ripple.style.height = `${d}px`;

    const buttonRect = button.getBoundingClientRect();
    ripple.style.left = `${event.clientX - buttonRect.left - d / 2}px`;
    ripple.style.top = `${event.clientY - buttonRect.top - d / 2}px`;
    ripple.style.backgroundColor = color;
    ripple.style.animationDuration = `${speed}ms`;
    ripple.classList.add("ripple");

    ripple.addEventListener("animationend", () => {
        ripple.remove();
    });
};