import './Navbar.css'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { NavbarLink } from 'shared/ui/NavbarLink/NavbarLink';
import { LinkLogo } from 'shared/ui/LinkLogo/LinkLogo';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  const { t } = useTranslation();
  
  return (
    <header className={classNames('Navbar', {}, [className])}>
      <div className="navbar__left">
        <LinkLogo className="navbar__logo" />
        <nav>
          <NavbarLink name={t('My Skills')} to='/skills' />
          <NavbarLink name={t('About Me')} to='/about' />
          <NavbarLink name={t('Contacts')} to='/contacts' />
        </nav>
      </div>
      <div className="navbar__right">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};