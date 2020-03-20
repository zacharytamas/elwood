/** An identifier for a Note. */
export type NoteId = string;

export interface Auditable {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Reviewable {
  reviewedAt?: Date;
}

/**
 * Properties that describe the relationship between Notes and how their information
 * informs or is informed by other Notes' information.
 */
export interface Informable {
  /** A list of IDs of other Notes whose information is informed by this one's. */
  informs?: NoteId[];
  /** A list of IDs of other Notes whose information informs this one's. */
  informedBy?: NoteId[];
}

interface IndexEntry {
  name: string;
  entry: string;
  description?: string;
}

export interface Indexable {
  indexes?: IndexEntry[];
}

export type BaseNoteMeta = Auditable & Reviewable & Informable & Indexable;

export interface Note<T extends BaseNoteMeta = BaseNoteMeta> {
  id: NoteId;
  body: string;
  meta: T;
}
