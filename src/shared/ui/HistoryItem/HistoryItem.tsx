import './HistoryItem.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

interface HistoryItemProps {
  className?: string;
  date: string;
  paragraph: string;
  noline?: boolean;
  pink?: boolean;
}

export const HistoryItem = memo((props: HistoryItemProps) => {
  const {
    className, 
    date, 
    paragraph,
    noline, 
    pink
  } = props;

  const mods = {
    'pink': pink, 
    'noline': noline,
  }

  return (
    <div className={classNames('HistoryItem', mods, [className])}>
      <div className="historyItem__date">{date}</div>
      <div className="historyItem__dot"></div>
      <p className="historyItem__paragraph">{paragraph}</p>
    </div>
  );
});