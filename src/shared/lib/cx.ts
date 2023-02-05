type Mods = Record<string, boolean | string>;

export const cx = (
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_className, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter(Boolean)
  ].join(' ');
};
