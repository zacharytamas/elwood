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

export type BaseNoteMeta = Auditable & Reviewable & Informable;

export interface Note<T extends BaseNoteMeta = BaseNoteMeta> {
  body: string;
  meta: T;
}
