import './TabItem.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo } from 'react';

export interface TabItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  id: string;
}

export const TabItem = memo((props: TabItemProps) => {
  const {className, text, id, onClick} = props;

  return (
    <button 
      className={classNames('TabItem', {}, [className])}
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
});