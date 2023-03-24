import './AboutPage.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HistoryItem } from '../../../shared/ui/HistoryItem/HistoryItem';
import { TabItem } from 'shared/ui/TabItem/TabItem';
import { Page } from 'shared/ui/Page/Page';

interface AboutPageProps {
  className?: string;
}

const AboutPage: FC<AboutPageProps> = ({className}) => {
  const {t} = useTranslation('about');

  return (
    <Page className={classNames('AboutPage', {}, [className])}>
      <div className="container">
        <div className="about__gradient"></div>
        <h1>{t('About')} <span>{t('me')}</span></h1>
        <div className="tabs__wrap">
          <TabItem text={t('chronology')} className="active" />
          <TabItem text="Общая информация" />
        </div>

        <div className="history__wrap">
          <h4>Web-design</h4>
          <HistoryItem 
            date="2010" 
            paragraph='В 2010 году закончил Санкт-Петербургский Университет Технологии и Дизайна (СПБГУТиД) по специальности “Графический Дизайнер”' 
          />
          <HistoryItem 
            date="2012" 
            paragraph='В 2012 году решил переквалифицироваться в web-дизайнера, почти сразу же изучил верстку HTML/CSS. Устроился на свою первую работу как web-дизайнер. После 3 года занимался фрилансом на freelance.ru' 
          />
          <HistoryItem 
            date="2015" 
            paragraph='Летом 2015 устроился в известную IT-компанию SEMrush в отдел платного траффика (PPC). В мои основные задачи входило создание дизайн-макетов для лендингов, их верстка, подключение форм регистрации и обслуживание данных лендингов на сервере. В компании я проработал почти ровно 4 года' 
          />
          <HistoryItem 
            date="2019" 
            paragraph='С конца 2019 по лето 2022 работал в эстонской компании Crezu на аутсорсе так же в должности web-дизайнера' 
          />
          <HistoryItem 
            date="2022" 
            paragraph='В августе 2022 устроился в Quadcode где проработал всего три месяца' 
            noline
          />
          <h4 className="pink">Frontend Development</h4>
          <HistoryItem 
            date="2022" 
            paragraph='В конце ноября 2022 решил сменить род деятельности и стал усиленно изучать frontend-технологии' 
            pink
          />
          <HistoryItem 
            date="2022" 
            paragraph='В конце ноября 2022 решил сменить род деятельности и стал усиленно изучать frontend-технологии' 
            pink
          />
          <HistoryItem 
            date="2022" 
            paragraph='В конце ноября 2022 решил сменить род деятельности и стал усиленно изучать frontend-технологии' 
            noline
            pink
          />
        </div>
      </div>
    </Page>
  );
};

export default AboutPage;