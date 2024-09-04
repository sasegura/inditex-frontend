import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyGetEpisodesQuery } from '../redux/slices/apiSlice';
import useSetIsLoadingPage from './useSetIsLoadingPage';
import { episodeListSelector, updateEpisodes } from '../redux/slices/mainSlice';
import { IEpisode } from '../interfaces/episode';

const CACHE_EXPIRY = 24 * 60 * 60 * 1000;

const useHandleEpisodeCache = (podcastId: string) => {
  const dispatch = useDispatch();

  const episodeListStore = useSelector(episodeListSelector);
  const [episodeValue, setEpisodeValue] = useState<IEpisode[]>();

  const [getEpisode, { data: episodeList, isLoading, isError }] =
    useLazyGetEpisodesQuery();

  useSetIsLoadingPage(isLoading);

  useEffect(() => {
    if (
      episodeListStore[podcastId] &&
      Date.now() - episodeListStore[podcastId].cacheTime < CACHE_EXPIRY
    ) {
      setEpisodeValue(episodeListStore[podcastId]?.episodes);
      return;
    }
    getEpisode({ podcastId: podcastId.toString() });
  }, [getEpisode, episodeListStore, podcastId]);

  useEffect(() => {
    if (episodeList) {
      dispatch(
        updateEpisodes({
          episodeList: episodeList,
          podcastId: podcastId,
        }),
      );
    }
  }, [episodeList, dispatch, podcastId]);

  return { data: episodeValue, isLoading, isError };
};
export default useHandleEpisodeCache;
