import { stripIndent } from 'common-tags';
import { dump } from 'js-yaml';

import { IMessage } from './interfaces';

export const dumpMessage = (message: IMessage) => stripIndent`
  ---
  ${dump(message.frontMatter).trim()}
  ---
  ${message.body}
`;
