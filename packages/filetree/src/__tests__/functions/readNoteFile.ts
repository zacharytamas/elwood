import { promises } from 'fs';

import { readNoteFile } from '../../index';

jest.mock('fs');

const TREE_ROOT = `${__dirname}/demoTree`;

it('should read a note file correctly', async () => {
  (promises.readFile as jest.Mock).mockImplementation(async () =>
    Buffer.from('Hello world.\n')
  );
  const fileContents = await readNoteFile(TREE_ROOT, '20200319134900');
  expect(promises.readFile).toHaveBeenCalledWith(`${TREE_ROOT}/20200319134900.md`);
  expect(fileContents).toEqual('Hello world.\n');
});
