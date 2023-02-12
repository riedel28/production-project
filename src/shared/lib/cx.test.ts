import { cx } from './cx';

describe('cx', () => {
  test('sets first param', () => {
    expect(cx('test')).toBe('test');
  });

  test('sets additional params', () => {
    const expected = 'test test1 test2';

    expect(cx('test', {}, ['test1', 'test2'])).toBe(expected);
  });

  test('sets mods', () => {
    const expected = 'test hovered test1 test2';

    expect(
      cx(
        'test',
        {
          hovered: true,
          active: false
        },
        ['test1', 'test2']
      )
    ).toBe(expected);
  });

  test('sets mods undefined', () => {
    const expected = 'test active test1 test2';

    expect(
      cx(
        'test',
        {
          hovered: undefined,
          active: true
        },
        ['test1', 'test2']
      )
    ).toBe(expected);
  });
});
