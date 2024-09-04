import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IPodcastDetail } from '../../interfaces/podcast';
import { IEpisode } from '../../interfaces/episode';

export interface IEpisodeByPodcastCache {
  episodes: IEpisode[];
  cacheTime: number;
}

export interface IPodcastCache {
  podcast: IPodcastDetail[];
  cacheTime: number;
}

export interface IMainSlice {
  isLoadingPage: boolean;
  podcastList: IPodcastCache;
  episodeList: Record<string, IEpisodeByPodcastCache>;
}

const initialState: IMainSlice = {
  isLoadingPage: false,
  podcastList: {
    podcast: [],
    cacheTime: 0,
  },
  episodeList: {},
};

export const MainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setIsLoadingPage: (state, action: PayloadAction<boolean>) => {
      state.isLoadingPage = action.payload;
    },
    updatePodcasts: (
      state,
      action: PayloadAction<{
        podcastList: IPodcastDetail[];
      }>,
    ) => {
      state.podcastList = {
        podcast: action.payload.podcastList,
        cacheTime: Date.now(),
      };
    },
    updateEpisodes: (
      state,
      action: PayloadAction<{
        episodeList: IEpisode[];
        podcastId: string;
      }>,
    ) => {
      state.episodeList[action.payload.podcastId] = {
        episodes: action.payload.episodeList,
        cacheTime: Date.now(),
      };
    },
  },
});

export const { setIsLoadingPage } = MainSlice.actions;
export const { updatePodcasts } = MainSlice.actions;
export const { updateEpisodes } = MainSlice.actions;

export default MainSlice;

export const isLoadingPageSelector = (state: RootState) =>
  state.main.isLoadingPage;
export const podcastListSelector = (state: RootState) => state.main.podcastList;
export const episodeListSelector = (state: RootState) => state.main.episodeList;
