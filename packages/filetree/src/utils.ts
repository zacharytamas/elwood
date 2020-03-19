import { promises } from 'fs';
import { resolve } from 'path';

const { writeFile, readFile } = promises;

export { writeFile, readFile };

/**
 * Given a path to the root of an Elwood tree and the ID of a Note, returns the path to
 * the Note's file.
 */
export const calculateNotePath = (treeRoot: string, noteId: string) =>
  resolve(treeRoot, `${noteId}.md`);
