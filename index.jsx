import React from "react";
import "./style.css";

function RippleButton({
  children,
  color = "rgb(83, 82, 82)",
  speed = 1000,
  radius = 2,
}) {
  function createRipple(event) {
    // Create a new ripple element
    const button = event.currentTarget;
    const ripple = document.createElement("div");
    button.appendChild(ripple);

    let d = Math.max(button.clientWidth, button.clientHeight);
    ripple.style.width = ripple.style.height = d + "px";
    ripple.style.left = event.clientX - button.offsetLeft - d / 2 + "px";
    ripple.style.top = event.clientY - button.offsetTop - d / 2 + "px";
    ripple.style.backgroundColor = color;
    ripple.style.animationDuration = `${speed}ms`;
    ripple.classList.add("ripple");
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  }

  return (
    <button
      className="ripple-button"
      style={{ borderRadius: `${radius}px` }}
      onClick={createRipple}
    >
      {children}
    </button>
  );
}

export default RippleButton;
