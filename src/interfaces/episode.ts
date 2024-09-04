export interface IEpisode {
  trackId: number;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
  description: string;
  wrapperType: string;
  episodeUrl: string;
}

export interface IEpisodeResponse {
  results: IEpisode[]
}
