import clsx from 'clsx';
import React from 'react';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: any;
  color?: string;
  className?: any;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: string;
  variant?: string;
  font?: string;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  ariaLabel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      color = 'primary',
      className,
      children,
      disabled = false,
      fullWidth = false,
      onClick,
      size = 'medium',
      variant = 'contained',
      font = 'font-roboto',
      type = 'submit',
      id,
      ariaLabel,
    }: Props,
    ref,
  ) => {
    const styles = [
      'border-transparent rounded focus:outline-none transition-all',
      size === 'large' && 'text-base px-8 py-3.5',
      size === 'medium' && 'text-sm px-6 py-3',
      size === 'small' && 'text-xs px-4 py-1',
      fullWidth && 'w-full',

      !disabled && 'hover:shadow-2xl',
      !disabled &&
        variant === 'contained' &&
        color === 'primary' &&
        `bg-${color} text-white hover:bg-${color}-600`,
      !disabled &&
        variant === 'contained' &&
        color === 'secondary' &&
        `bg-${color} text-white hover:bg-${color}-600`,
      !disabled &&
        variant === 'contained' &&
        color === 'white' &&
        `bg-white text-gray-900 hover:text-primary`,
      !disabled &&
        variant === 'outlined' &&
        `border border-gray-300 text-${color} hover:border-${color} text-white`,

      disabled && `cursor-not-allowed `,
      disabled && variant === 'contained' && `bg-gray-200 text-gray-400`,
      disabled && variant === 'outlined' && `border border-gray-300 text-gray-300`,
      font,
      className,
    ];

    return (
      <button
        id={id}
        ref={ref}
        type={type}
        disabled={disabled}
        className={clsx(styles)}
        onClick={onClick}
        aria-label={ariaLabel || ''}
      >
        {children}
      </button>
    );
  },
);

export default Button;
