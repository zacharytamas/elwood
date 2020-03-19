import lintNote from '../lintNote';

test('lints for orphans by default', async () => {
  expect(await lintNote({ body: '', id: '123', meta: {} })).toContainEqual({
    name: 'orphaned',
    message: expect.stringMatching(/this note is orphaned/i),
    level: 'error',
  });

  expect(
    await lintNote({ body: '', id: '123', meta: { informs: ['asdf'] } })
  ).not.toContainEqual({
    name: 'orphaned',
  });
});
