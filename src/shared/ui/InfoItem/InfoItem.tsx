import './InfoItem.scss'
import { memo } from 'react';

interface InfoItemProps {
  title: string;
  icons: string[];
  list: string[];
}

export const InfoItem = memo((props: InfoItemProps) => {
  const {title, icons, list} = props;

  return (
    <div className="skills__info-item">
      <h4>{title}</h4>
          <div className="skills__info-icons">
            {icons.map((icon) => (<img src={`./images/${icon}`} alt=""></img>))}
          </div>
          <ul>
            {list.map((listItem) => (<li>{listItem}</li>))}
          </ul>
    </div>
  );
});