import React from 'react';


// Common button replacement using Tailwind
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-xs sm:text-sm";

    const variants = {
        primary: "bg-primary text-white hover:bg-accent",
        secondary: "bg-transparent border border-gray-300 text-primary hover:bg-primary hover:text-white",
        outline: "border border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "bg-transparent text-primary hover:bg-gray-100"
    };

    const sizes = {
        sm: "px-4 py-2",
        md: "px-6 py-3",
        lg: "px-8 py-4"
    };

    return (
        <button
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
