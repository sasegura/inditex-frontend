import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { StyledTableRow } from '../episodeTable/episodeTable';

function SkeletonTableEpisode() {
  return (
    <TableContainer component={Paper} sx={{ minHeight: '550px' }}>
      <Table
        sx={{ margin: 3, marginRight: 0, maxWidth: '94%' }}
        size="small"
        aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Title</b>
            </TableCell>
            <TableCell align="right">
              <b>Date</b>
            </TableCell>
            <TableCell align="right">
              <b>Duration</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(new Array(21)).map((_row: null, index: number) => (
            <StyledTableRow key={index}>
              <TableCell component="th" scope="row">
                <Skeleton data-testid={`name_${index}`} width={'400px'} />
              </TableCell>
              <TableCell align="right">
                <Skeleton data-testid={`date_${index}`} width={'100px'} />
              </TableCell>
              <TableCell align="right">
                <Skeleton data-testid={`duration_${index}`} width={'87px'} />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default SkeletonTableEpisode;
