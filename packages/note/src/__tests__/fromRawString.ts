import { stripIndent } from 'common-tags';

import { fromRawString } from '../index';

describe('with metadata', () => {
  it('should parse correctly', () => {
    const result = fromRawString(stripIndent`
      ---
      test: true
      ---

      Hello World.
    `);

    expect(result).toMatchObject({ body: 'Hello World.', meta: { test: true } });
  });
});

describe('without metadata', () => {
  it('should parse correctly', () => {
    expect(fromRawString(`Hello World.`)).toMatchObject({
      body: 'Hello World.',
      meta: {},
    });
  });
});

// TODO test handling of malformed inputs
