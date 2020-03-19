import { promises } from 'fs';

import { writeNoteFile } from '../../index';

jest.mock('fs');

const TREE_ROOT = `${__dirname}/demoTree`;

it('should write to the file system appropriately', async () => {
  const NOTE_ID = '20200319134900';
  const NOTE_BODY = 'My body';

  await writeNoteFile(TREE_ROOT, NOTE_ID, NOTE_BODY);

  expect(promises.writeFile).toHaveBeenCalledWith(
    `${TREE_ROOT}/${NOTE_ID}.md`,
    NOTE_BODY
  );
});
