import { Card, Grid } from '@mui/material';
import PodcastDescriptionCard from '../../components/podcastDescriptionCard/podcastDescriptionCard';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IPodcastDetail } from '../../interfaces/podcast';
import useHandlePodcastCache from '../../hooks/useHandlePodcastCache';
import SkeletonPodcastDetail from '../../components/skeletons/skeletonPodcastDetail';

const PodcastDetail = () => {
  const { podcastId } = useParams() as {
    podcastId: string;
  };
  const navigate = useNavigate();
  const [podcast, setPodcast] = useState<IPodcastDetail>();

  const { data: podcastValue, isLoading } = useHandlePodcastCache();

  useEffect(() => {
    if (podcastValue && !isLoading) {
      const podcastDetails = podcastValue?.find((podcast: IPodcastDetail) => {
        return podcast.id === podcastId;
      });
      setPodcast(podcastDetails);
    }
  }, [podcastValue, isLoading, podcastId]);

  const onHandleCardClick = () => {
    navigate(`/podcast/${podcastId}`);
  };

  return (
    <>
      <Grid container py="30px" px="10px">
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            {podcast && !isLoading ? (
              <PodcastDescriptionCard
                podcast={podcast}
                onHandleCardClick={onHandleCardClick}
              />
            ) : (
              <SkeletonPodcastDetail />
            )}
          </Card>
        </Grid>
        <Grid item xs={9} pl="80px" container rowSpacing={1}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default PodcastDetail;
