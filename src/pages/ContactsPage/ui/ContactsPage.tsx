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
import { ReactComponent as CopyIcon } from 'shared/assets/img/i-copy.svg';

interface ContactsPageProps {
  className?: string;
}

const ContactsPage: FC<ContactsPageProps> = ({className}) => {
  const { t } = useTranslation('contacts');
  const [ selectedTabId, setselectedTabId ] = useState('');
  const [ contactLink, setContactLink ] = useState('');
  const [ copiedLink, setCopiedLink ] = useState(false);

  const tabs: ContactsTabProps[] = [
    {
      id: 'tg', 
      link:'@Kosta_LA', 
      children: <TelegramIcon />
    },
    {
      id: 'mail', 
      link:'konstantinla87@gmail.com', 
      children: <MailIcon />
    },
    {
      id: 'linkedin', 
      link:'www.linkedin.com/in/konstantin-labzov/', 
      children: <LinkedinIcon />
    },
    {
      id: 'hh', 
      link:'https://dev.hh.ru/articles/logos', 
      children: <HhIcon />
    },
  ]

  const handleTabClick = (id: string, link: string) => {
    setselectedTabId(id);
    setContactLink(link);
  }

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(contactLink);
    setCopiedLink(true);
    setTimeout(() => {
      setCopiedLink(false);
    }, 1000);
  }, [contactLink]);

  return (
    <Page className={classNames('ContactsPage', {}, [className])}>
      <div className="container">
        <h1>Contact<span>s</span></h1>
        <ContactsTabs
          tabs={tabs} 
          selectedId={selectedTabId} 
          onClick={handleTabClick} 
        />
        {selectedTabId && (
          <span className="contacts__link">
            <>{contactLink}</>
            <button
              className={classNames("contacts__copy", {'copied': copiedLink})}
              onClick={onCopy}
            >
              <CopyIcon />
              <div className="contacts__copy-tooltip">
                Copied!
              </div>
            </button>
          </span>
        )}
      </div>
    </Page>
  );
};

export default ContactsPage;