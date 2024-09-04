import {
  CardActionArea,
  CardContent,
  Divider,
  Skeleton,
  Typography,
} from '@mui/material';

function SkeletonPodcastDetail() {
  return (
    <CardActionArea>
      <Skeleton
        variant="rectangular"
        width={200}
        height={200}
        sx={{ mt: 2, mx: 'auto' }}
      />
      <CardContent className="contentPodDetail">
        <Divider />
        <div>
          <Skeleton width={250} height={40} />
          <Skeleton width={200} height={20} />
        </div>
        <Divider />
        <div>
          <Typography variant="subtitle1">Description:</Typography>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton width="90%" />
          <Skeleton />
          <Skeleton width="80%" />
          <Skeleton />
          <Skeleton width="95%" />
          <Skeleton width="60%" />
        </div>
      </CardContent>
    </CardActionArea>
  );
}
export default SkeletonPodcastDetail;
