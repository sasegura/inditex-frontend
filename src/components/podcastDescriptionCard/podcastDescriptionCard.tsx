import {
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import './podcastDescriptionCard.css';
import { IPodcastDetail } from '../../interfaces/podcast';

interface PodcastDescriptionProps {
  podcast: IPodcastDetail;
  onHandleCardClick: () => void;
}

function PodcastDescriptionCard({
  podcast,
  onHandleCardClick,
}: PodcastDescriptionProps) {
  const { imageUrl, name, author, description } = podcast;

  return (
    <CardActionArea onClick={onHandleCardClick}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt="imageTitle"
        className="imagePodDetail"
      />

      <CardContent className="contentPodDetail">
        <Divider />
        <div>
          <Typography variant="subtitle1">
            <b>{name}</b>
          </Typography>
          <Typography variant="body1">
            <i>{`by ${author}`}</i>
          </Typography>
        </div>
        <Divider />
        <div>
          <Typography variant="subtitle2">
            <b>Description:</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <i>{description}</i>
          </Typography>
        </div>
      </CardContent>
    </CardActionArea>
  );
}

export default PodcastDescriptionCard;
