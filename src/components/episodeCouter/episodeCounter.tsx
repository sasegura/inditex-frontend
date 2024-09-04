import { Card, Skeleton, Typography } from '@mui/material';

interface EpisodeTableProps {
  counter: number;
  isLoading: Boolean;
}

const EpisodeCounter = ({ counter, isLoading }: EpisodeTableProps) => {
  return (
    <Card>
      {!isLoading ? (
        <Typography p={1} variant="h6">
          Episodes: {counter}
        </Typography>
      ) : (
        <Skeleton height={'48px'} sx={{ marginLeft: '10px' }} width={'15%'} />
      )}
    </Card>
  );
};

export default EpisodeCounter;
