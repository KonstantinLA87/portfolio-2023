import './Navbar.css'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { ReactComponent as LogoDark } from 'shared/assets/img/logo_dark.svg';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <div className={classNames('Navbar', {}, [className])}>
      <LogoDark />
      <div className="navbar__right">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};