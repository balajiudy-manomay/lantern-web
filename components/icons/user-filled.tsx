import React from "react";

export interface UserFilledIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}

const UserFilledIcon: React.FC<UserFilledIconProps> = ({
    size = 24,
    color = "currentColor",
    width,
    height,
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ?? size}
            height={height ?? size}
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                fill={color}
            />
            <path
                d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                fill={color}
            />
        </svg>
    );
};

export default UserFilledIcon;