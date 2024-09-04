import { Card, Divider, Skeleton } from '@mui/material';

function SkeletonEpisodePlayer() {
  return (
    <Card sx={{ width: '100%', p: 5 }}>
      <Skeleton width={400} height={40} data-testId='skeleton-episode-player' />

      {Array.from(new Array(21)).map((text: any, index: number) => {
        const radom = (Math.random() + 9) * 10;
        return <Skeleton key={index} width={`${radom}%`} />;
      })}

      <Divider sx={{ my: 3 }} />
      <Skeleton height={40} />
    </Card>
  );
}
export default SkeletonEpisodePlayer;
