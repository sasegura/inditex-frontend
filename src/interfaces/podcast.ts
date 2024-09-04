export interface IPodcastDetail {
  id: string;
  name: string;
  imageUrl: string;
  title: string;
  author: string;
  description: string;
}

export interface IPodcastsResponse {
  feed: {
    entry: IPodcast[];
  };
}

export interface IPodcast {
  id: { attributes: { 'im:id': string } };
  'im:name': { label: string };
  'im:image': [{ label: string }, { label: string }, { label: string }];
  summary: { label: string };
  title: {
    id?: number;
    label: string;
  };
  'im:artist': { label: string };
}
