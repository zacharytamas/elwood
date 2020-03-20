import { stripIndent } from 'common-tags';

import { fromRawString } from '../index';

describe('with metadata', () => {
  it('should parse correctly', () => {
    const result = fromRawString(
      '123',
      stripIndent`
      ---
      test: true
      ---

      Hello World.
    `
    );

    expect(result).toMatchObject({
      id: '123',
      body: 'Hello World.',
      meta: { test: true },
    });
  });
});

describe('without metadata', () => {
  it('should parse correctly', () => {
    expect(fromRawString('123', `Hello World.`)).toMatchObject({
      body: 'Hello World.',
      meta: {},
      id: '123',
    });
  });
});

// TODO test handling of malformed inputs
