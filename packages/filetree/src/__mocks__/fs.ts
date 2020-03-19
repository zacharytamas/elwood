const fs = jest.genMockFromModule('fs') as any;

export const promises = {
  writeFile: jest.fn(async () => {}),
  readFile: jest.fn(async () => {}),
};

export default fs;
