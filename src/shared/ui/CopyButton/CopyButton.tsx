import './CopyButton.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as CopyIcon } from 'shared/assets/img/i-copy.svg';


interface CopyButtonProps {
  className?: string;
  text: string;
}

export const CopyButton = memo((props: CopyButtonProps) => {
  const {className, text} = props;
  const {t} = useTranslation();
  const [ copiedLink, setCopiedLink ] = useState(false);

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => {
      setCopiedLink(false);
    }, 1000);
  }, [text]);

  return (
    <button
      className={classNames("CopyButton", {'copied': copiedLink}, [className])}
      onClick={onCopy}
    >
      <CopyIcon />
      <div className="CopyButton__tooltip">
        {t('copied')}
      </div>
    </button>
  );
});