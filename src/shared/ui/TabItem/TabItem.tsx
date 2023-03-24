import './TabItem.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

interface TabItemProps {
  className?: string;
  text: string;
}

export const TabItem = memo((props: TabItemProps) => {
  const {className, text} = props;

  return (
    <div className={classNames('TabItem', {}, [className])}>
      {text}
    </div>
  );
});