import './SkillsItem.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as SkillsImg1 } from 'shared/assets/img/skills-img_1.svg'
import { ReactComponent as SkillsImg2 } from 'shared/assets/img/skills-img_2.svg'
import { InfoItem } from 'shared/ui/InfoItem/InfoItem';
import { data_ru } from 'shared/data/skillsData';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface SkillsItemProps {
  className?: string;
  specification: string;
  text: string[];
}

export const SkillsItem: FC<SkillsItemProps> = ({className, specification, text}) => {
  const {t} = useTranslation('skills');

  const [opened, setOpened] = useState<boolean>(false);

  const onToggle = (event: React.MouseEvent<HTMLElement>) => {
    setOpened(prev => !prev);
  }

  

  return (
    <div className={classNames('SkillsItem', {}, [className])}>
      { className !== 'inverted' 
        ?
        <div className="skillsItem__title-design">
          <div className="skillsItem__title-design__left">
            <span>&gt;</span>
            <span>10</span>
          </div>
          <div className="skillsItem__title-design__right">
            <p>{t('Years')}</p>
            <p>{t('of web design')}</p>
          </div>
        </div>
        :
        <div className="skillsItem__title-frontend">
          <p className="pink">{t('hardcore learning')}</p>
          <p>
            <span className="pink">{t('frontend')}</span>
            <span>{t('for 6 month')}</span>
          </p>
        </div>
      }
      { className === 'inverted' ? <SkillsImg2 className='skills__bg-img' /> : <SkillsImg1 className='skills__bg-img' />}
      <ul>
        {text.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <Button theme={ButtonTheme.OUTLINED} onClick={onToggle}>
        {!opened ? t('Details') : t('Hide')}
      </Button>
      <div className={classNames('skills__info-wrap', {'opened': opened}, [className])}>
        <div className="skills__info-padding">
          {/* @ts-ignore */}
          {data_ru[specification].map(({title, icons, list}) => (
            <InfoItem 
              title={title} 
              icons={icons} 
              list={list} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};