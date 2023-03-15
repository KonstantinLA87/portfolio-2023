import './AppLink.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: React.ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
  const {className, children, to, onClick} = props;
  const {t} = useTranslation();

  return (
    <Link 
    to={to} 
    className={classNames('AppLink', {}, [className])} 
    onClick={onClick}
    >
      { children }
    </Link>
  );
};