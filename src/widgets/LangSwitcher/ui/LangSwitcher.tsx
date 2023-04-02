import './LangSwitcher.scss'
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LangIcon} from 'shared/assets/img/lang.svg'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC = memo(({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <>
      <button
        className="lang_btn"
        onClick={toggleLang}
      >
        <LangIcon className='lang_icon' />
        <p className='lang_text'>
          <span className={i18n.language === 'ru' ? 'active' : ''}>RU</span>
          <span className="lang__separate"> | </span>
          <span className={i18n.language === 'ru' ? '' : 'active'}>EN</span>
        </p>
      </button>
    </>
  )
});
