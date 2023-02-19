type Mods = Record<string, boolean | string>;

export const cx = (
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => { return Boolean(value); })
      .map(([className]) => { return className; }),
    ...additional.filter(Boolean)
  ].join(' ');
};
