import './BestChoiceIcon.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ReactComponent as BestChoiceIcon1 } from 'shared/assets/img/bestchoice_1.svg';
import { ReactComponent as BestChoiceIcon2 } from 'shared/assets/img/bestchoice_2.svg';

interface BestChoiceIconProps {
  className?: string;
}

export const BestChoiceIcon = memo((props: BestChoiceIconProps) => {
  const {className} = props;
  return (
    <div className={classNames('BestChoiceIcon', {}, [className])}>
      <BestChoiceIcon1 className='BestChoice__round' />
      <BestChoiceIcon2 className='BestChoice__crown' />
    </div>
  );
});