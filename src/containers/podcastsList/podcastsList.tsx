import { Grid } from '@mui/material';
import { IPodcastDetail } from '../../interfaces/podcast';
import Podcasts from '../../components/podcast/podcasts';
import SkeletonCardList from '../../components/skeletons/skeletonCardList';
import FilterInput from '../../components/filterInput/filterInput';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useGetFilteredPodcasts from '../../hooks/useGetFilteredPodcasts';
import useHandlePodcastCache from '../../hooks/useHandlePodcastCache';

function PodcastsList() {
  const [filter, setFilter] = useState<string>('');

  const navigate = useNavigate();

  const { data: podcastValue, isLoading } = useHandlePodcastCache();

  const { filteredPodcast } = useGetFilteredPodcasts({
    filter,
    podcastsList: podcastValue,
  });

  const onHandleClick = (podcastId: string) => {
    navigate(`podcast/${podcastId}`);
  };

  const onHandleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <Grid container wrap="wrap">
      <FilterInput
        value={filter}
        onChange={onHandleFilter}
        size={filteredPodcast?.length || 0}
      />
      {!isLoading ? (
        filteredPodcast?.map((podcast: IPodcastDetail, index: number) => (
          <Grid key={index} item xs={3} sx={{ py: 5 }}>
            <Podcasts
              key={podcast.id}
              podcast={podcast}
              onHandleClick={() => onHandleClick(podcast.id)}
            />
          </Grid>
        ))
      ) : (
        <SkeletonCardList />
      )}
    </Grid>
  );
}

export default PodcastsList;
