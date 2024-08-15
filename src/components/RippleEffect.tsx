import React, { MouseEvent } from "react";
import styles from '@styles/RippleButton.module.css';

export interface RippleEffectProps {
    event: MouseEvent<HTMLDivElement>;
    color: string;
    speed: number;
}

/**
 * Creates a ripple effect on a specified button when it is clicked.
 *
 * This function dynamically generates a ripple effect element, 
 * positions it based on the user's click location, and animates 
 * it to create a visually appealing effect. The ripple expands 
 * from the click point and fades out before being removed from the DOM.
 *
 * @param {Object} params - Parameters for creating the ripple effect.
 * @param {MouseEvent<HTMLDivElement>} params.event - The mouse event triggered by the user's click. Used to determine the click position and target element.
 * @param {string} params.color - The color of the ripple effect, specified in any valid CSS color format (e.g., "rgba(255, 255, 255, 0.4)").
 * @param {number} params.speed - The duration of the ripple animation in milliseconds.
 *
 * @example
 * // Usage example:
 * createRippleEffect({ 
 *   event: mouseEvent, 
 *   color: 'rgba(0, 0, 0, 0.4)', 
 *   speed: 600 
 * });
 *
 * The ripple effect will be displayed on the button that was clicked.
 */

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
    ripple.classList.add(styles.ripple);

    ripple.addEventListener("animationend", () => {
        ripple.remove();
    });
};