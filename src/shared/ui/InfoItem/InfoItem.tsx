import './InfoItem.scss'
import { memo } from 'react';
import { ReactComponent as LangIcon} from 'shared/assets/img/lang.svg';
import { useTranslation } from 'react-i18next';

interface InfoItemProps {
  title: string;
  icons: string[];
  list: string[];
}

export const InfoItem = memo((props: InfoItemProps) => {
  const { title, icons, list } = props;
  const { t } = useTranslation('skills');

  return (
    <div className="skills__info-item">
      <div className="skills-title__wrap">
        {/* <LangIcon className='test_icon' /> */}
        <h4>{t(title)}</h4>
      </div>
      <div className="skills__info-icons">
        {icons.map((icon) => (<img src={`./images/${icon}`} alt=""></img>))}
      </div>
      <ul>
        {list.map((listItem) => (<li>{t(listItem)}</li>))}
      </ul>
    </div>
  );
});