export interface Auditable {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Reviewable {
  reviewedAt?: Date;
}

export type BaseNoteMeta = Auditable & Reviewable;

export interface Note<T extends BaseNoteMeta = BaseNoteMeta> {
  body: string;
  meta: T;
}
