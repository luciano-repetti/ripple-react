import { ReactNode } from "react";

export interface RippleButtonProps {
    children: ReactNode;
    color?: string;
    speed?: number;
    radius?: number;
    width?: number | string;
    height?: number | string;
}