import './NavbarLink.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, LinkProps, NavLink } from 'react-router-dom';

interface NavbarLinkProps extends LinkProps {
  className?: string;
  name: string;
}

const NavbarLink: FC<NavbarLinkProps> = ({className, to, name}) => {
  const {t} = useTranslation();
  return (
    <NavLink to={to} className={classNames('NavbarLink', {}, [className])}>
      {name}
    </NavLink>
  );
};

export { NavbarLink };