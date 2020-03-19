import { stripIndent } from 'common-tags';

import { dumpMessage, IMessage } from '../message';

describe('dumpMessage()', () => {
  test('smoke test', () => {
    const createdAt = new Date('2019-04-19');
    const body = 'My body';

    const message: IMessage = { frontMatter: { createdAt }, body };

    expect(dumpMessage(message)).toEqual(stripIndent`
      ---
      createdAt: ${createdAt.toISOString()}
      ---
      ${body}
    `);
  });
});
