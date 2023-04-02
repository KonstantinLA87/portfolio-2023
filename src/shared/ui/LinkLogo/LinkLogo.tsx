import './LinkLogo.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { ReactComponent as Logo } from 'shared/assets/img/logo.svg';

interface LinkLogoProps extends NavLinkProps {
  className?: string;
}

export const LinkLogo = memo(({className, to}: LinkLogoProps) => {
  const { t } = useTranslation();
  return (
    <NavLink to={to} className={classNames('LinkLogo', {}, [className])}>
      <Logo />
    </NavLink>
  );
});