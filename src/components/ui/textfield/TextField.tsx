import React, { ReactElement, useState } from 'react';
import clsx from 'clsx';
import { FieldError } from 'react-hook-form';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  autoComplete?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean | string | FieldError;
  errorMessage?: any;
  fullWidth?: boolean;
  hint?: string;
  label?: any;
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
}

const ICON_HEIGHT = 16;
const ICON_WIDTH = 16;

const TextField = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      autoComplete,
      className,
      defaultValue,
      disabled = false,
      error = false,
      errorMessage,
      fullWidth = false,
      hint,
      label,
      name,
      onChange,
      onFocus,
      onBlur,
      placeholder,
      required,
      type = 'text',
      value,
    }: Props,
    ref,
  ): ReactElement => {
    const inputStyles = [
      'mt-2 py-3 rounded-sm border w-full text-sm font-sans tracking-wide text-gray-500 h-10 placeholder-gray-500',
      type !== 'password' && 'px-4',
      type === 'password' && 'pl-3 pr-8',
      !error &&
        !disabled &&
        'bg-white border-gray-200 transition-all focus:border-gray-400 outline-none hover:shadow-2xl focus:shadow-md',
      !error &&
        disabled &&
        'bg-gray-200 border-gray-200 transition-all focus:border-gray-400 outline-none cursor-not-allowed',
      error &&
        !disabled &&
        'bg-white border-error transition-all focus:border-error outline-none hover:shadow-2xl focus:shadow-md',
    ];

    const labelStyles = [
      error && !disabled && 'text-error text-base font-sans mb-2 tracking-wide',
      !error && !disabled && 'text-gray-900 text-base mb-2 font-sans tracking-wide',
    ];

    const rootStyles = ['font-sans', fullWidth && 'w-full', !fullWidth && 'w-64', className];

    const [_type, setType] = useState(type);

    return (
      <div className={clsx(rootStyles)}>
        {label && (
          <label className={clsx(labelStyles)}>
            {label} {required && <span className="text-alert">*</span>}
          </label>
        )}
        <div className="relative">
          <input
            autoComplete={autoComplete}
            className={clsx(inputStyles)}
            name={name}
            type={_type}
            disabled={disabled}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            ref={ref}
            aria-label={`Input field for ${label}`}
          />
          <div className="absolute top-0 right-0 h-full flex flex-row justify-center items-center p-1">
            {type === 'password' && (
              <button
                type="button"
                tabIndex={-1}
                className=" h-10 w-10 flex justify-center items-center outline-none focus:outline-none rounded-full hover:bg-gray-100 "
                onClick={() => {
                  setType(_type === 'password' ? 'text' : 'password');
                }}
              >
                <img
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                  src={_type === 'password' ? '/svg/eye-off.svg' : '/svg/eye-on.svg'}
                />
              </button>
            )}
          </div>
        </div>
        {error && errorMessage && <div className="text-error text-xs py-1">{errorMessage}</div>}
        {!error && hint && <div className="text-gray-700 text-xs py-1 ">{hint}</div>}
      </div>
    );
  },
);

export default TextField;
