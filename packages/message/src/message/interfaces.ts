interface IFMCreatedAtDate {
  createdAt: Date;
  createdTZ?: string;
}

interface IFMCreatedLongLat {
  createdLongitude?: number;
  createdLatitude?: number;
}

export interface IMessageFrontMatter extends IFMCreatedAtDate, IFMCreatedLongLat {}

export interface IMessage<T = IMessageFrontMatter> {
  frontMatter?: T;
  body: string;
}
