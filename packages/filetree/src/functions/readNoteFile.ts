import { fromRawString } from '@elwood/note';

import { calculateNotePath, readFile } from '../utils';

/**
 * Given a filepath to a Elwood tree root and a Note's ID, reads the Note from disk,
 * parses it, and returns a Note instance.
 */
export default (treeRoot: string, noteId: string) =>
  readFile(calculateNotePath(treeRoot, noteId))
    .then(buffer => buffer.toString())
    .then(body => fromRawString(noteId, body));
