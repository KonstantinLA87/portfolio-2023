import './Button.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo } from 'react';

export enum ButtonTheme {
  OUTLINED = 'button__outlined',
  CLEAN = 'button__clean',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme?: ButtonTheme;
}

export const Button = memo((props: ButtonProps) => {
  const {className, children, theme, ...otherProps} = props;

  return (
    <button 
      className={classNames('Button', {}, [className, theme])}
      {...otherProps}
    >
      {children}
    </button>
  );
});