import readNoteFile from './functions/readNoteFile';
import writeNoteFile from './functions/writeNoteFile';

export interface TreeOptions {
  /** The file path to where the root of the Elwood tree exists on disk. */
  treeRoot: string;
}

const tree = (treeOptions: TreeOptions) => {
  const { treeRoot } = treeOptions;

  return {
    readNote: (noteId: string) => readNoteFile(treeRoot, noteId),
    writeNote: (noteId: string, body: string) => writeNoteFile(treeRoot, noteId, body),
  };
};

export default tree;

export type TreeInstance = ReturnType<typeof tree>;
