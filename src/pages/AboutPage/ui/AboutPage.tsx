import './AboutPage.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
  className?: string;
}

const AboutPage: FC<AboutPageProps> = ({className}) => {
  const {t} = useTranslation();

  return (
    <div className={classNames('AboutPage', {}, [className])}>
      <div className="container">
        <h1>About <span>me</span></h1>
      </div>
    </div>
  );
};

export default AboutPage;