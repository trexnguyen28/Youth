export interface StoryDataType {
  id: string | number;
  imgUri: string;
  title?: string;
  avtUri?: string;
}

export interface FeedDataType {
  id: string | number;
  userName: string;
  avtUri: string;
  creationDate: string | Date;
  status?: string;
  photos?: Array<string>;
}
