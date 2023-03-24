import './LinkButton.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ReactComponent as LinkIcon } from 'shared/assets/img/i-link.svg';


interface LinkButtonProps {
  className?: string;
  link: string;
}

export const LinkButton = memo((props: LinkButtonProps) => {
  const {className, link} = props;

  return (
    <a
      className={classNames("LinkButton", {}, [className])}
      href={link}
      target="_blank"
    >
      <LinkIcon />
    </a>
  );
});