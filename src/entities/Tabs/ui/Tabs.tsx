import './Tabs.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { TabItem, TabItemProps } from 'shared/ui/TabItem/TabItem';

interface TabsProps {
  className?: string;
  tabs: TabItemProps[];
  selectedId: string;
  onClick: (id: string) => void;
  children?: ReactNode;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    selectedId,
    onClick,
    children
  } = props;
  return (
    <div className={classNames('Tabs', {}, [className])}>
      {children}
      {tabs.map(tab => (
        <TabItem
          key={tab.id}
          id={tab.id}
          text={tab.text}
          className={classNames('', {'active': tab.id === selectedId})}
          onClick={() => onClick(tab.id)}
        >
          {tab.text}
        </TabItem>
      ))}
    </div>
  );
});