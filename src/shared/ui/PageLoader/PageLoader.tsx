import { cx } from 'shared/lib/cx';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={cx(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
