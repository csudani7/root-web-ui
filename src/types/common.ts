export interface ImageType {
  src: string;
  alt: string;
}

export interface LinkProps {
  label: string;
  link: string;
}

export interface IconProps {
  color?: string;
  fillColor?: string;
  rotateDegree?: number;
  width?: number;
  height?: number;
  className?: string;
  isActive?: boolean;
  stroke?: string;
}
