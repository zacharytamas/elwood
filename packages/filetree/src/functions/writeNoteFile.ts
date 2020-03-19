import { calculateNotePath, writeFile } from '../utils';

/**
 * Given a filepath to a Elwood tree root, a Note's ID, and its data, writes it to disk.
 */
export default (treeRoot: string, noteId: string, body: string) =>
  writeFile(calculateNotePath(treeRoot, noteId), body);
