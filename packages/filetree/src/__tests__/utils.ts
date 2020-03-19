import { calculateNotePath } from '../utils';

it('should determine correct paths', () => {
  expect(calculateNotePath(`myPath`, 'asdf')).toMatch(/myPath\/asdf\.md$/);
});
