import { FC, ReactNode } from 'react';
declare module 'ripple-react/RippleButton' {
    const RippleButton: FC<RippleButtonProps>;
    export default RippleButton;
}

export interface RippleButtonProps {
    children: ReactNode;
    color?: string;
    speed?: number;
    radius?: number;
    width?: number | string;
    height?: number | string;
}
