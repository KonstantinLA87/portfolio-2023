import './Footer.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as GithubLogo } from 'shared/assets/img/github-logo.svg';

interface FooterProps {
  className?: string;
}

export const Footer = memo((props: FooterProps) => {
  const {className} = props;
  const {t} = useTranslation();
  return (
    <div className={classNames('Footer', {}, [className])}>
      <div className="container">
        <a 
          href="https://github.com/KonstantinLA87/portfolio-2023.git" 
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo />
          {t('github link')}
        </a>
        <span>© KonstantinLA. 2023</span>
      </div>
    </div>
  );
});