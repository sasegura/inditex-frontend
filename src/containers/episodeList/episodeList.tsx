import { Card, Container, Grid } from '@mui/material';
import EpisodeCounter from '../../components/episodeCouter/episodeCounter';
import EpisodeTable from '../../components/episodeTable/episodeTable';
import { useParams, useNavigate } from 'react-router-dom';
import useSetIsLoadingPage from '../../hooks/useSetIsLoadingPage';
import { useEffect, useState } from 'react';
import SkeletonTableEpisode from '../../components/skeletons/skeletonTableEpisodeDetail';
import useHandleEpisodeCache from '../../hooks/useHandleEpisodeCache';
import { IEpisode } from '../../interfaces/episode';

const EpisodeList = () => {
  const { podcastId } = useParams() as {
    podcastId: string;
  };

  const [counter, setCounter] = useState(0);
  const [episodes, setEpisodes] = useState<IEpisode[]>();
  const navigate = useNavigate();

  const {
    data: episodesList,
    isLoading,
    isError: hasErrorFetchingEpisode,
  } = useHandleEpisodeCache(podcastId);

  useSetIsLoadingPage(isLoading);

  useEffect(() => {
    if (episodesList) {
      setCounter(episodesList.length - 1);
      setEpisodes(episodesList);
    }
  }, [episodesList]);

  const handleEpisodeSelect = (episodeId: number) => {
    navigate(`episode/${episodeId}`);
  };

  return (
    <>
      {hasErrorFetchingEpisode ? (
        <Card sx={{ width: '100%', height: '20px', padding: 2 }}>Error</Card>
      ) : (
        <Container>
          <Grid item xs={12} mb='15px'>
            <EpisodeCounter counter={counter} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12}>
            {isLoading ? (
              <SkeletonTableEpisode />
            ) : (
              episodes !== undefined && (
                <EpisodeTable
                  episodes={episodes}
                  onEpisodeSelect={handleEpisodeSelect}
                />
              )
            )}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default EpisodeList;
