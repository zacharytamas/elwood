import isOrphaned from '../isOrphaned';

it('should return true when the Note does not inform another and is not indexed', () => {
  // Although `informs` does exist, it is empty.
  expect(isOrphaned({ meta: { informs: [] } })).toBeTruthy();

  // Although `indexes` does exist, it is empty.
  expect(isOrphaned({ meta: { indexes: [] } })).toBeTruthy();

  // Missing both `informs` and `indexes` metadata keys automatically means orphaned.
  expect(isOrphaned({ meta: {} })).toBeTruthy();
});

it('should return false when the Note does inform another', () => {
  expect(isOrphaned({ meta: { informs: ['asdf'] } })).toBeFalsy();
  expect(
    isOrphaned({ meta: { indexes: [{ name: 'index', entry: 'asdf' }] } })
  ).toBeFalsy();
});

it('should have a withResult property that returns a RuleResult', () => {
  expect(isOrphaned.withResult).toBeDefined();

  expect(isOrphaned.withResult({ meta: { informs: [] } })).toMatchObject({
    name: 'orphaned',
    message: expect.stringMatching(/this note is orphaned/i),
    level: 'error',
  });
});
