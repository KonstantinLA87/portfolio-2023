import './MainPage.scss'
import { Player } from '@lottiefiles/react-lottie-player';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { SkillsItem } from 'widgets/SkillsItem/ui/SkillsItem';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
  className?: string;
}

const MainPage = ({className}: MainPageProps ) => {
  const { t } = useTranslation();

  return (
    <div className={classNames('MainPage', {}, [className])}>
      <div className="container">
        <p className="main__name">{t('Labzov Konstantin')}</p>
        <Player
            autoplay
            loop={false}
            keepLastFrame
            src="https://lottie.host/4ba6a36d-98ba-4f85-854c-4828b2c2fb07/kuWoCBhxxi.json"
            // src="https://lottie.host/d45acafa-4192-4871-a1b1-6fe45005dc95/mk2JUct2wT.json"
            style={{ height: 'auto', width: '100%' }}
          >
        </Player>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script> 

        {/* <div className="skills__wrap" style={{margin: '200px 0',}}>
          <SkillsItem />
          <SkillsItem className="inverted" />
        </div> */}
      </div>
    </div>
  );
};

export default MainPage;