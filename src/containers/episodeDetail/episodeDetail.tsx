import ReactAudioPlayer from 'react-audio-player';
import './episodeDetail.css';
import { Card, Divider, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SkeletonEpisodePlayer from '../../components/skeletons/skeletonEpisodePlayer';
import useHandleEpisodeCache from '../../hooks/useHandleEpisodeCache';
import { IEpisode } from '../../interfaces/episode';

const EpisodeDetail = () => {
  const [episode, setEpisode] = useState<IEpisode>();

  const { podcastId, episodeId } = useParams() as {
    podcastId: string;
    episodeId: string;
  };
  const { data: episodeList, isLoading } = useHandleEpisodeCache(podcastId);

  useEffect(() => {
    if (episodeList && !isLoading) {
      const selectedEpisode = episodeList?.find((episode: IEpisode) => {
        return episode.trackId.toString() === episodeId;
      });

      setEpisode(selectedEpisode);
    }
  }, [episodeId, episodeList, isLoading]);

  return (
    <>
      {!isLoading ? (
        <Card sx={{ p: 5, width: '100%' }}>
          <Typography variant='h5' gutterBottom>
            <b>{episode?.trackName}</b>
          </Typography>
          <Typography variant='body2' gutterBottom>
            <i>{episode?.description}</i>
          </Typography>

          <Divider sx={{ my: 3 }} />
          <ReactAudioPlayer
            src={episode?.episodeUrl}
            autoPlay
            controls
            className='audioPlayer'
          />
        </Card>
      ) : (
        <SkeletonEpisodePlayer />
      )}
    </>
  );
};

export default EpisodeDetail;
