import { RippleButtonProps } from '../components/RippleButton';

declare module 'ripple-react/RippleButton' {
    import { FC } from 'react';
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