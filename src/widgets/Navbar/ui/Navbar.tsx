import './Navbar.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { NavbarLink } from 'shared/ui/NavbarLink/NavbarLink';
import { LinkLogo } from 'shared/ui/LinkLogo/LinkLogo';
import { useTranslation } from 'react-i18next';
import { ReactComponent as MenuIcon } from 'shared/assets/img/i-menu.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { MobileMenu } from 'entities/MobileMenu';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  const { t } = useTranslation();
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const onOpenMobileMenu = () => {
    setMobileMenuOpened(true);
  }

  const onCloseMobileMenu = (value: boolean) => {
    setMobileMenuOpened(value);
  }
  
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
      <Button 
        className="navbar__menu"
        theme={ButtonTheme.CLEAN}
        onClick={onOpenMobileMenu}
      >
        <MenuIcon />
      </Button>
      <MobileMenu 
        className={classNames('', {'active': mobileMenuOpened})} 
        //@ts-ignore
        handlerOnCloseMobileMenu={onCloseMobileMenu}
      />
    </header>
  );
};