import { useState, useEffect } from 'react';
import { IPodcastDetail } from '../interfaces/podcast';

interface PodcastsHook {
  podcastsList?: IPodcastDetail[];
  filter: string;
}

const useGetFilteredPodcasts = ({
  podcastsList,
  filter: filt,
}: PodcastsHook) => {
  const [filteredPodcast, setFilteredPodcast] = useState<IPodcastDetail[]>([]);

  useEffect(() => {
    if (podcastsList) {
      const filtered = podcastsList.filter(
        (podcast: IPodcastDetail) =>
          podcast?.title?.toLowerCase()
            .includes(filt.toString().toLowerCase()) ||
            podcast?.author?.toLowerCase()
            .includes(filt.toString().toLowerCase()),
      );

      setFilteredPodcast(filtered);
    }
  }, [filt, podcastsList]);

  return { filteredPodcast };
};
export default useGetFilteredPodcasts;
