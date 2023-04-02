import './MobileMenu.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { NavbarLink } from 'shared/ui/NavbarLink/NavbarLink';
import { ReactComponent as CloseIcon } from 'shared/assets/img/i-close.svg'
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface MobileMenuProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const MobileMenu = memo((props: MobileMenuProps) => {
  const {
    className,
    isOpen,
    onClose
  } = props;
  const {t} = useTranslation();

  const closeHandler = useCallback(() => {
    if(onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <Portal>
      <div className={classNames('MobileMenu', {'active': isOpen}, [className])}>
        <div className="mobileMenu__header">
          <Button 
            theme={ButtonTheme.CLEAN}
            onClick= {closeHandler}
          >
            <CloseIcon />
          </Button>
        </div>
        <nav
          onClick= {closeHandler}
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
          {/* <LangSwitcher /> */}
          <ThemeSwitcher />
        </div>
      </div>
    </Portal>
  );
});