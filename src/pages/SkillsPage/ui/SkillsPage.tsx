import './SkillsPage.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SkillsItem } from 'widgets/SkillsItem/ui/SkillsItem';
import { Page } from 'shared/ui/Page/Page';

interface SkillsPageProps {
  className?: string;
}

const SkillsPage: FC<SkillsPageProps> = ({className}) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames('SkillsPage', {}, [className])}>
      <div className="container">
        <div className="skills__wrap">
          <SkillsItem 
            specification="design"
            text={[
              'Работа в 2х крупных IT-компаниях Петербурга (SEMrush, Quadcode)',
              'Разработка дизайн-макетов + верстка HTML, CSS/SCSS, JS... ',
              'С Figma на Ты. Auto-лэйауты, компоненты, разработка UI-китов и т.д.',
            ]}
          />
          <SkillsItem 
            className="inverted" 
            specification="frontend" 
            text={[
              'Обучение Javascript, React + Typescript + Redux и т.д. по 8 часов в день,',
              'практический без выходных в течении полугода',
            ]}
          />
        </div>
      </div>
    </Page>
  );
};

export default SkillsPage;