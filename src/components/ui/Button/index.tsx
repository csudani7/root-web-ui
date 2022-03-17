import React from 'react';
import clsx from 'clsx';

export interface ButtonProps {
  children: any;
  bgColor: string;
  outlineColor?: string;
  variant?: 'fill' | 'outline';
  type?: 'button' | 'submit';
  width?: string;
  height?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  bgColor,
  outlineColor,
  variant,
  type,
  width,
  height,
  onClick,
}: ButtonProps) {
  const styles = [
    'items-center justify-center tracking-wider py-4 px-12 rounded',
    variant === 'outline' ? 'bg-transparent' : `${bgColor}`,
    variant === 'outline' && `border-2 border-solid ${outlineColor}`,
    width,
    height,
  ];

  return (
    <button type={type} onClick={onClick} className={clsx(styles)}>
      {children}
    </button>
  );
}

{
  /* <div className="flex flex-col justify-center items-center">
          <div className="my-2">
            <Button bgColor={'bg-green-300'}>
              <div className="flex justify-center items-center">
                <SlackIcon />
                <h4 className="ml-2 text-xl">Join</h4>
              </div>
            </Button>
          </div>
          <div className="my-2">
            <Button bgColor={'bg-green-300'}>
              <h4>Learn More</h4>
            </Button>
          </div>
          <div className="my-2">
            <Button bgColor={'bg-transparent'} variant="outline" outlineColor={'border-green-300'}>
              <h4>View Course</h4>
            </Button>
          </div>
        </div> */
}
