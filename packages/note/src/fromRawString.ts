import fm from 'front-matter';

import { BaseNoteMeta, Note, NoteId } from './interfaces';

/**
 * Given a raw string of Markdown with frontmatter, returns it parsed into a Note type.
 */
export default <T extends BaseNoteMeta = BaseNoteMeta>(
  noteId: NoteId,
  rawString: string
): Note<T> => {
  const { body, attributes } = fm<T>(rawString);
  return { id: noteId, body, meta: attributes };
};
