import { promises } from 'fs';

import { tree } from '../index';

jest.mock('fs');

describe('currying behavior', () => {
  it('should return an object with curried read/write methods', () => {
    const treeInstance = tree({ treeRoot: __dirname });

    (promises.readFile as jest.Mock).mockImplementation(async () => Buffer.from(''));
    treeInstance.readNote('asdf');
    expect(promises.readFile).toHaveBeenCalledWith(`${__dirname}/asdf.md`);

    (promises.writeFile as jest.Mock).mockImplementation(async () => {});
    treeInstance.writeNote('asdf', 'my body');
    expect(promises.writeFile).toHaveBeenCalledWith(`${__dirname}/asdf.md`, 'my body');
  });
});
