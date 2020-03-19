import fm from 'front-matter';

import { IMessage, IMessageFrontMatter } from './interfaces';

export const parseRawMessage = (messageString: string): IMessage => {
  const parts = fm(messageString.trim());

  return {
    frontMatter: parts.attributes as IMessageFrontMatter,
    body: parts.body,
  };
};
