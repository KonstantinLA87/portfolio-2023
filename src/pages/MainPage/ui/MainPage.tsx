import './MainPage.scss'
import { Player } from '@lottiefiles/react-lottie-player';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
//@ts-ignore
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { ScrollDown } from 'shared/ui/ScrollDown/ScrollDown';
import { PlateItem } from 'shared/ui/PlateItem/PlateItem';
import { ReactComponent as BenefitsImg1 } from 'shared/assets/img/benefits-1.svg';
import { ReactComponent as BenefitsImg2 } from 'shared/assets/img/benefits-2.svg';
import { BestChoiceIcon } from 'shared/ui/BestChoiceIcon/BestChoiceIcon';
import useMediaQuery from 'shared/hooks/useMediaQuery/useMediaQuery';

interface MainPageProps {
  className?: string;
}

const MainPage = ({className}: MainPageProps ) => {
  const { t } = useTranslation('main');

  const matches = useMediaQuery('(min-width: 960px)');


  return (
    <>
      {
        matches
        ?
        <Fullpage className={classNames('MainPage', {}, [className])}>
          <FullPageSections>
            <FullpageSection className='main__fullpage'>
              <div className="container">
                <div className="main__player-wrap">
                  <p className="main__name">{t('Labzov Konstantin')}</p>
                  <Player
                      autoplay
                      loop={false}
                      keepLastFrame
                      src="./images/animation/title_desktop.json"
                      style={{ height: 'auto', width: '100%' }}
                    >
                  </Player>
                  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script> 
                </div>
              </div>
              <ScrollDown className='main__scrollDown' />
            </FullpageSection>
            <FullpageSection className='main__fullpage'>
              <div className="container">
                <div className="main__benefits-title">
                  <BestChoiceIcon />
                  <h2 className='pink'>{t('Best Choice')} <span>{t('for business')}</span></h2>
                </div>
                <div className="main__benefits-wrap">
                  <PlateItem 
                    className='main__benefits-item'
                    img={(<BenefitsImg1 />)}
                    title1={t('benefits-1_title-1')}
                    title2={t('benefits-1_title-2')}
                    list1={t('benefits-1_lis-1')}
                    list2={t('benefits-1_lis-2')}
                  />
                  <PlateItem 
                    className='main__benefits-item'
                    img={(<BenefitsImg2 />)}
                    title1={t('benefits-2_title-1')}
                    title2={t('benefits-2_title-2')}
                    list1={t('benefits-2_lis-1')}
                    pink
                  />
                  <PlateItem 
                    className='main__benefits-item'
                    img={(<BenefitsImg1 />)}
                    title1={t('benefits-3_title-1')}
                    title2={t('benefits-3_title-2')}
                    list1={t('benefits-3_lis-1')}
                  />
                </div>
              </div>
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
        :
        <Page className={classNames('MainPage', {}, [className])}>
          <div className="container">
            <p className="main__name">{t('Labzov Konstantin')}</p>
            <Player
                autoplay
                loop={false}
                keepLastFrame
                src="./images/animation/title_mobile.json"
                style={{ height: 'auto', width: '100%' }}
              >
            </Player>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script> 
          </div>
        </Page>
      }
    </>
    
  );
};

export default MainPage;