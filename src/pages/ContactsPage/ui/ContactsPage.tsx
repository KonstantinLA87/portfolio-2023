import './ContactsPage.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { ContactsTabProps } from 'shared/ui/ContactsTab/ContactsTab';
import { ContactsTabs } from 'entities/ContactsTabs';
import { ReactComponent as TelegramIcon } from 'shared/assets/img/contacts-tg.svg';
import { ReactComponent as MailIcon } from 'shared/assets/img/contacts-mail.svg';
import { ReactComponent as LinkedinIcon } from 'shared/assets/img/contacts-linked.svg';
import { ReactComponent as HhIcon } from 'shared/assets/img/contacts-hh.svg';
import { CopyButton } from 'shared/ui/CopyButton/CopyButton';
import { LinkButton } from 'shared/ui/LinkButton/LinkButton';

interface ContactsPageProps {
  className?: string;
}

const ContactsPage: FC<ContactsPageProps> = ({className}) => {
  const { t } = useTranslation('contacts');
  const [ selectedTabId, setselectedTabId ] = useState('');
  const [ contactLink, setContactLink ] = useState('');
  const [ contactText, setContactText ] = useState('');

  const tabs: ContactsTabProps[] = [
    {
      id: 'tg',
      text:'@Kosta_LA', 
      link:'@Kosta_LA', 
      children: <TelegramIcon />
    },
    {
      id: 'mail', 
      text:'KonstantinLA87@gmail.com', 
      link:'konstantinla87@gmail.com', 
      children: <MailIcon />
    },
    {
      id: 'linkedin', 
      text:'www.LinkedIn.com', 
      link:'https://www.linkedin.com/in/konstantin-labzov/', 
      children: <LinkedinIcon />
    },
    {
      id: 'hh', 
      text:'www.HeadHunter.ru', 
      link:'https://dev.hh.ru/articles/logos', 
      children: <HhIcon />
    },
  ]

  const handleTabClick = (id: string, link: string, text: string) => {
    setselectedTabId(id);
    setContactLink(link);
    setContactText(text);
  }

  return (
    <Page className={classNames('ContactsPage', {'padding-top': !selectedTabId}, [className])}>
      <div className="container">
        <h1>{t('title-1')}<span>{t('title-2')}</span></h1>
        <ContactsTabs
          tabs={tabs} 
          selectedId={selectedTabId} 
          onClick={handleTabClick} 
        />
        {selectedTabId && (
          <div className="contacts__link">
            <span>{contactText}</span>
            <CopyButton 
              text={contactLink}
              className="contacts__copyButton"
            />
            {(selectedTabId === 'linkedin' || selectedTabId === 'hh') && (
              <LinkButton 
                link={contactLink}
                className="contacts__linkButton"
              />
            )}
          </div>
        )}
      </div>
    </Page>
  );
};

export default ContactsPage;