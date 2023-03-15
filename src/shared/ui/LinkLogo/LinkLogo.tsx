import './LinkLogo.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoDark } from 'shared/assets/img/logo_dark.svg';

interface LinkLogoProps {
  className?: string;
}

export const LinkLogo: FC<LinkLogoProps> = ({className}) => {
  const {t} = useTranslation();
  return (
    <NavLink className={classNames('LinkLogo', {}, [className])} to={'/'}>
      <LogoDark />
    </NavLink>
  );
};