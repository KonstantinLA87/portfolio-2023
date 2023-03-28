import './PlateItem.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';

interface PlateItemProps {
  className?: string;
  img: ReactNode;
  title1: string;
  title2: string;
  list1: string;
  list2?: string | null;
  pink?: boolean;
}

export const PlateItem = memo((props: PlateItemProps) => {
  const {className, img, title1, title2, list1, list2, pink} = props;
  return (
    <div className={classNames('PlateItem', {}, [className])}>
      <div className="PlateItem__img">
        {img}
      </div>
      <div className="PlateItem__content">
        <h3
          className={classNames('', {'pink': pink})}
        >{title1} <span>{title2}</span></h3>
        <ul>
          <li>{list1}</li>
          {list2 && (<li>{list2}</li>)}
        </ul>
      </div>
    </div>
  );
});