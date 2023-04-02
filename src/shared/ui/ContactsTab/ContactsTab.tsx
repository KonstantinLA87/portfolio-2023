import './ContactsTab.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

export interface ContactsTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  link: string;
  text: string;
}

export const ContactsTab = memo((props: ContactsTabProps) => {
  const { className, children, id, onClick } = props;

  return (
    <button 
      className={classNames('ContactsTab', {}, [className])}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
});