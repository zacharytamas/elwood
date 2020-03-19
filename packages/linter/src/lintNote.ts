import { Note } from '@elwood/note';

import isOrphaned from './rules/isOrphaned';

const lintNote = async (note: Note) =>
  [isOrphaned.withResult].map(rule => rule(note)).filter(Boolean);

export default lintNote;
