import { Note } from '@elwood/note';

import { RuleResult } from './interfaces';

type Meta = Pick<Note, 'meta'>;

const isOrphaned = ({ meta: { informs, indexes } }: Meta) =>
  (informs === undefined || informs.length === 0) &&
  (indexes === undefined || indexes.length === 0);

isOrphaned.withResult = (note: Meta): RuleResult | null =>
  isOrphaned(note)
    ? {
        name: 'orphaned',
        level: 'error',
        message:
          'This note is orphaned: it does not inform another Note and does not define an Index.',
      }
    : null;

export default isOrphaned;
