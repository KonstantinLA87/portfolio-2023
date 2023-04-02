import './SkillsPage.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { SkillsItem } from 'widgets/SkillsItem/ui/SkillsItem';
import { Page } from 'shared/ui/Page/Page';
import { Footer } from 'shared/ui/Footer/Footer';

interface SkillsPageProps {
  className?: string;
}

const SkillsPage: FC = memo(({className}: SkillsPageProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames('SkillsPage', {}, [className])}>
      <div className="container">
        <div className="skills__wrap">
          <SkillsItem 
            specification="design"
            text={[
              'dn_item_list_1',
              'dn_item_list_2',
              'dn_item_list_3',
            ]}
          />
          <SkillsItem 
            className="inverted" 
            specification="frontend" 
            text={[
              'fe_item_list_1',
            ]}
          />
        </div>
      </div>
      <Footer />
    </Page>
  );
});

export default SkillsPage;