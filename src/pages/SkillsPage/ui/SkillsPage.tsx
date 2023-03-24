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
          <SkillsItem specification="design" />
          <SkillsItem specification="frontend" className="inverted" />
        </div>
      </div>
    </Page>
  );
};

export default SkillsPage;