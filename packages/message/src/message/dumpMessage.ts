import {IMessage} from './interfaces';
import {dump} from 'js-yaml';
import {stripIndent} from 'common-tags';

export const dumpMessage = (message: IMessage) => stripIndent`
  ---
  ${dump(message.frontMatter).trim()}
  ---
  ${message.body}
`;
