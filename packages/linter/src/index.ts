import { resolve } from 'path';

import { tree } from '@elwood/filetree';

import lintNote from './lintNote';

(async () => {
  const treeInstance = tree({ treeRoot: resolve(__dirname, '../../../demoTree') });

  const note = await treeInstance.readNote('20200319160030');

  lintNote(note);
})();
