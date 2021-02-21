export interface StoryDataType {
  id: string | number;
  imgUri: string;
  title?: string;
  avtUri?: string;
}

export enum FeedPrivacy {
  'public',
  'friend',
  'custom',
}

export interface FeedDataType {
  id: string | number;
  userName: string;
  avtUri: string;
  status?: string;
  privacy?: FeedPrivacy;
  creationDate: string | Date;
  photos?: Array<string>;
}
