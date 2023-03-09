import { cx, Mods } from 'shared/lib/cx';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100
    }),
    [size]
  );

  return <img src={src} alt={alt} style={styles} className={cx(cls.Avatar, mods, [className])} />;
};
