import { stripIndent } from 'common-tags';

import { parseRawMessage } from '../message';

describe('parseRawMessage()', () => {
  test('smoke test', () => {
    const DATE = new Date('2019-04-19T15:00:00');
    const BODY = 'My Body';

    const messageString = stripIndent`
      ---
      createdAt: ${DATE.toISOString()}
      ---
      ${BODY}
    `;

    const message = parseRawMessage(messageString);
    expect(message.frontMatter.createdAt).toEqual(DATE);
    expect(message.body).toEqual(BODY);
  });
});
