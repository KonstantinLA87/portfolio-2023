import './Page.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { className, children } = props;
  return (
    <section className={classNames('Page', {}, [className])}>
      {children}
    </section>
  );
});