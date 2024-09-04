import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { podcastListSelector, updatePodcasts } from '../redux/slices/mainSlice';
import { IPodcastDetail } from '../interfaces/podcast';
import { useLazyGetPodcastsQuery } from '../redux/slices/apiSlice';
import useSetIsLoadingPage from './useSetIsLoadingPage';

const CACHE_EXPIRY = 24 * 60 * 60 * 1000;

export interface  PodcastCacheResponse{
   data: IPodcastDetail[], 
   isLoading :boolean
}
const useHandlePodcastCache = () :PodcastCacheResponse=> {
  const dispatch = useDispatch();
  const podcastListStore = useSelector(podcastListSelector);
  const [podcastValue, setPodcastValue] = useState<IPodcastDetail[]>([]);

  const [getPodcast, { data: podcastsList, isLoading }] =
    useLazyGetPodcastsQuery();

  useSetIsLoadingPage(isLoading);

  useEffect(() => {
    if (Date.now() - podcastListStore.cacheTime < CACHE_EXPIRY) {
      setPodcastValue(podcastListStore.podcast);
      return;
    }
    getPodcast();
  }, [getPodcast, podcastListStore]);

  useEffect(() => {
    if (podcastsList) {
      dispatch(updatePodcasts({ podcastList: podcastsList }));
    }
  }, [podcastsList, dispatch]);

  return { data: podcastValue, isLoading };
};
export default useHandlePodcastCache;
