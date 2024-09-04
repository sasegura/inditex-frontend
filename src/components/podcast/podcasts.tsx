import { ReactElement } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import './podcast.css';
import { IPodcastDetail } from '../../interfaces/podcast';

interface PodcastSummaryProps {
  podcast: IPodcastDetail;
  onHandleClick: () => void;
}

const Podcasts = ({
  podcast,
  onHandleClick,
}: PodcastSummaryProps): ReactElement => {
  const { name, imageUrl, title, author } = podcast;

  return (
    <Container sx={{ mt: { xs: 8, lg: 16 } }}>
      <Card sx={{ maxWidth: 345, overflow: 'visible' }}>
        <CardActionArea onClick={onHandleClick}>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={title}
            className="imagePodCastCard"
          />
          <CardContent sx={{ textAlign: 'center', paddingTop: '80px' }}>
            <Typography gutterBottom variant="button" component="div">
              {name?.toUpperCase()}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Author: {author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default Podcasts;
