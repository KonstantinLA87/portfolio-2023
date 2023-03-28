import './ScrollDown.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ReactComponent as ArrowDown } from 'shared/assets/img/scroll-arrow.svg'


interface ScrollDownProps {
  className?: string;
}

export const ScrollDown = memo((props: ScrollDownProps) => {
  const {className} = props;
  return (
    <div className={classNames('ScrollDown', {}, [className])}>
      <ArrowDown />
    </div>
  );
});