import './AboutPage.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HistoryItem } from '../../../shared/ui/HistoryItem/HistoryItem';
import { TabItem, TabItemProps } from 'shared/ui/TabItem/TabItem';
import { Page } from 'shared/ui/Page/Page';
import { Tabs } from 'entities/Tabs';

interface AboutPageProps {
  className?: string;
}

const AboutPage: FC<AboutPageProps> = ({className}) => {
  const {t} = useTranslation('about');
  const [selectedTabId, setselectedTabId] = useState('');

  const tabs: TabItemProps[] = [
    {
      id: 'main',
      text:'Main info', 
    },
    {
      id: 'chronology', 
      text:'Chronology', 
    }
  ]

  const handleTabClick = (id: string) => {
    setselectedTabId(id);
  }

  return (
    <Page className={classNames('AboutPage', {'padding-top': !selectedTabId}, [className])}>
      <div className="container">
        <div className="about__gradient"></div>
        <h1>{t('About')} <span>{t('me')}</span></h1>

        <Tabs 
          className="tabs__wrap" 
          tabs={tabs} 
          selectedId={selectedTabId} 
          onClick={handleTabClick} 
        />

        {selectedTabId === 'chronology' && (    
          <div className="tab-content history__wrap">
            <h4>{t('Web-design')}</h4>
            <HistoryItem 
              date="2010" 
              paragraph={t('history_2010')} 
            />
            <HistoryItem 
              date="2012" 
              paragraph={t('history_2012')} 
            />
            <HistoryItem 
              date="2015" 
              paragraph={t('history_2015')} 
            />
            <HistoryItem 
              date="2019" 
              paragraph={t('history_2019')} 
            />
            <HistoryItem 
              date="2022" 
              paragraph={t('history_2022')} 
              noline
            />
            <h4 className="pink">{t('Frontend Development')}</h4>
            <HistoryItem 
              date={`2022 ${t('November')}`}
              paragraph={t('history_2022nov')} 
              pink
            />
            <HistoryItem 
              date={`2023 ${t('January')}`}
              paragraph={t('history_2023jan')} 
              pink
            />
            <HistoryItem 
              date={`2023 ${t('February')}`}
              paragraph={t('history_2023feb')} 
              pink
            />
            <HistoryItem 
              date={`2023 ${t('March')}`}
              paragraph={t('history_2023mar')} 
              noline
              pink
            />
          </div>
          )
        }
        
      </div>
    </Page>
  );
};

export default AboutPage;