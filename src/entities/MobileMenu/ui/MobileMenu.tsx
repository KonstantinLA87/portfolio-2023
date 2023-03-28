import './MobileMenu.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavbarLink } from 'shared/ui/NavbarLink/NavbarLink';
import { ReactComponent as CloseIcon } from 'shared/assets/img/i-close.svg'
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';

interface MobileMenuProps {
  className?: string;
  handlerOnCloseMobileMenu: (value: boolean) => boolean;
}

export const MobileMenu = memo((props: MobileMenuProps) => {
  const {
    className,
    handlerOnCloseMobileMenu,
  } = props;
  const {t} = useTranslation();

  const onCloseMobileMenu = (value: boolean) => {
    handlerOnCloseMobileMenu(value);
  }

  return (
    <div className={classNames('MobileMenu', {}, [className])}>
      <div className="mobileMenu__header">
        <Button 
          theme={ButtonTheme.CLEAN}
          onClick={() => onCloseMobileMenu(false)}
        >
          <CloseIcon />
        </Button>
      </div>
      <nav
        onClick={() => onCloseMobileMenu(false)}
      >
        <NavbarLink 
          name={t('My Skills')} 
          to='/skills' 
        />
        <NavbarLink 
          name={t('About Me')} 
          to='/about' 
        />
        <NavbarLink 
          name={t('Contacts')} 
          to='/contacts' 
        />
      </nav>
      <div className="mobileMenu__footer">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
});