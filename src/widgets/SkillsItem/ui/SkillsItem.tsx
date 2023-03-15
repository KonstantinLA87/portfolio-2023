import './SkillsItem.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as SkillsTitle1 } from 'shared/assets/img/skills-title_1.svg'
import { ReactComponent as SkillsTitle2 } from 'shared/assets/img/skills-title_2.svg'
import { ReactComponent as SkillsImg1 } from 'shared/assets/img/skills-img_1.svg'
import { ReactComponent as SkillsImg2 } from 'shared/assets/img/skills-img_2.svg'
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { InfoItem } from 'shared/ui/InfoItem/InfoItem';

interface SkillsItemProps {
  className?: string;
  specification: string;
}

export const SkillsItem: FC<SkillsItemProps> = ({className, specification}) => {
  const {t} = useTranslation();

  const [opened, setOpened] = useState<boolean>(false);

  const onToggle = (event: React.MouseEvent<HTMLElement>) => {
    setOpened(prev => !prev);
  }

  const data = {
    design: [
      {
        title: 'Adobe Suite',
        icons: ['i-ps.svg', 'i-ai.svg', 'i-ae.svg', 'i-xd.svg'],
        list: [
          'Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)',
          'Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS...',
          'Еще какая-то херотень на строчку'
        ]
      },
      {
        title: 'Figma',
        icons: ['i-figma.svg'],
        list: [
          'Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)',
          'Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS...',
          'Еще какая-то херотень на строчку'
        ]
      },
    ],
    frontend: [
      {
        title: 'Языки',
        icons: ['i-js.svg', 'i-ts.svg'],
        list: [
          'Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)',
          'Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS...',
          'Еще какая-то херотень на строчку'
        ]
      },
      {
        title: 'Фреймворки / Библиотеки',
        icons: ['i-react.svg', 'i-react-router.svg', 'i-redux.svg'],
        list: [
          'Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)',
          'Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS...',
          'Еще какая-то херотень на строчку'
        ]
      },
      {
        title: 'Тесты / Контроль',
        icons: ['i-jest.svg', 'i-storybook.svg', 'i-loki.svg'],
        list: [
          'Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)',
          'Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS...',
          'Еще какая-то херотень на строчку'
        ]
      },
      {
        title: 'Сборщик модулей',
        icons: ['i-webpack.svg'],
        list: [
          'Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)',
          'Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS...',
          'Еще какая-то херотень на строчку'
        ]
      },
      {
        title: 'Дистрибуторы',
        icons: ['i-git.svg', 'i-github.svg', 'i-git-actions.svg'],
        list: [
          'Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)',
          'Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS...',
          'Еще какая-то херотень на строчку'
        ]
      },
      {
        title: 'Сборщик модулей',
        icons: ['i-eslint.svg', 'i-stylelint.svg'],
        list: [
          'Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)',
          'Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS...',
          'Еще какая-то херотень на строчку'
        ]
      },
      {
        title: 'Перевод',
        icons: ['i-i18n.svg'],
        list: [
          'Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)',
          'Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS...',
          'Еще какая-то херотень на строчку'
        ]
      },
      {
        title: 'Архитектура',
        icons: ['i-fsd.svg'],
        list: [
          'Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)',
          'Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS...',
          'Еще какая-то херотень на строчку'
        ]
      },
    ],
  }

  return (
    <div className={classNames('SkillsItem', {}, [className])}>
      { className === 'inverted' ? <SkillsImg2 className='skills__bg-img' /> : <SkillsImg1 className='skills__bg-img' />}
      { className === 'inverted' ? <SkillsTitle2 className='skills__title' /> : <SkillsTitle1 className='skills__title' />}
      <ul>
        <li>Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)</li>
        <li>Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS... </li>
        <li>Еще какая-то херотень на строчку</li>
      </ul>
      <AppLink to={''} onClick={onToggle}>
        {!opened ? t('Details') : t('Hide')}
      </AppLink>
      <div className={classNames('skills__info-wrap', {'opened': opened}, [className])}>
        <div className="skills__info-padding">
          {/* @ts-ignore */}
          {data[specification].map(({title, icons, list}) => (
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