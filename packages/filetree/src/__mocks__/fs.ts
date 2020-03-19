const fs = jest.genMockFromModule('fs') as any;

export const promises = {
  readFile: jest.fn(async () => {}),
};

export default fs;
