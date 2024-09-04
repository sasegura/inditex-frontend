import { Container, Grid, Skeleton } from '@mui/material';

const SkeletonCardList = () => {
  return (
    <>
      {Array.from(new Array(12)).map((_item, index) => (
        <Grid key={index} item xs={3} sx={{ py: 5 }}>
          <Container sx={{ mt: { xs: 8, lg: 16 } }}>
            <Skeleton variant="rectangular" width={'100%'} height={155} />
            <Skeleton width="100%" />
            <Skeleton width="80%" />
          </Container>
        </Grid>
      ))}
    </>
  );
};

export default SkeletonCardList;
