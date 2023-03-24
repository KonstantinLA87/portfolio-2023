import './ContactsTabs.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo, ReactNode } from 'react';
import { ContactsTab, ContactsTabProps } from 'shared/ui/ContactsTab/ContactsTab';

interface ContactsTabsProps {
  className?: string;
  tabs: ContactsTabProps[];
  selectedId: string;
  onClick: (id: string, link: string) => void;
  children?: ReactNode;
}

export const ContactsTabs: FC<ContactsTabsProps> = memo((props) => {
  const {
    className,
    tabs,
    selectedId,
    onClick,
    children,
  } = props;

  return (
    // @ts-ignore
    <div className={classNames('ContactsTabs', {}, [className])}>
      {children}
      {tabs.map(tab => (
        <ContactsTab 
          key={tab.id}
          id={tab.id}
          link={tab.link}
          className={classNames('', {'active': tab.id === selectedId})}
          // @ts-ignore
          onClick={() => onClick(tab.id, tab.link)}
        >
          {tab.children}
        </ContactsTab>
      ))}
    </div>
  );
});