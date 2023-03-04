export type Mods = Record<string, boolean | string | undefined>;

export const cx = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => {
        return Boolean(value);
      })
      .map(([className]) => {
        return className;
      }),
    ...additional.filter(Boolean)
  ].join(' ');
};
