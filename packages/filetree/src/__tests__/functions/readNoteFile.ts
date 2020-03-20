import { promises } from 'fs';

import { readNoteFile } from '../../index';

jest.mock('fs');

const TREE_ROOT = `${__dirname}/demoTree`;

it('should read a note file correctly', async () => {
  (promises.readFile as jest.Mock).mockImplementation(async () =>
    Buffer.from('Hello world.\n')
  );
  const NOTE_ID = '20200319134900';
  const note = await readNoteFile(TREE_ROOT, NOTE_ID);
  expect(promises.readFile).toHaveBeenCalledWith(`${TREE_ROOT}/20200319134900.md`);
  expect(note).toMatchObject({ id: NOTE_ID, body: 'Hello world.\n' });
});
