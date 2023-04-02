import './Tooltip.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as GithubLogo } from 'shared/assets/img/github-logo.svg';
import { Portal } from '../Portal/Portal';
import { ReactComponent as LinkIcon } from 'shared/assets/img/i-link.svg';

interface TooltipProps {
  className?: string;
}

export const Tooltip = memo((props: TooltipProps) => {
  const {
    className
  } = props;
  const { t } = useTranslation();
  const [ hideTooltip, setHideTooltip ] = useState(false);

  const onClose = useCallback(() => {
    setHideTooltip(true);
  }, []);
  
  return (
    <Portal>
      <div className={classNames('Tooltip', {'tooltip__hide': hideTooltip}, [className])}>
        <span
          className="tooltip__close"
          onClick={onClose}
        ></span>
        <a 
          className={classNames('tooltip__wrap', {}, [className])}
          href="https://github.com/KonstantinLA87/portfolio-2023.git" 
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo />
          <div className="tooltip__content">
            <p>{t('github link')}</p>
            <LinkIcon />
          </div>
        </a>
      </div>
    </Portal>
  );
});