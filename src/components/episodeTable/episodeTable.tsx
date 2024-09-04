import { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Link from '@mui/material/Link';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IEpisode } from '../../interfaces/episode';
import { DateTransform, milliSecondsToTime } from '../../utils/utils';

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

interface EpisodeTableProps {
  episodes: IEpisode[];
  onEpisodeSelect: (id: number) => void;
}

const EpisodeTable = ({ episodes, onEpisodeSelect }: EpisodeTableProps) => {
  return (
    <TableContainer component={Paper} sx={{ minHeight: '550px' }}>
      <Table
        sx={{ margin: 3, marginRight: 0, maxWidth: '94%' }}
        size="small"
        data-testId='EpisodeTable'
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
          {episodes?.length > 0 &&
            episodes.map((row: IEpisode, index: number) => {
              if (index > 0) {
                return (
                  <StyledTableRow
                    key={episodes?.length <= 0 ? row?.trackId : index}>
                    <TableCell component="th" scope="row">
                      <Link
                        component="button"
                        variant="body2"
                        sx={{
                          textAlign: 'left',
                        }}
                        onClick={() => onEpisodeSelect(row?.trackId)}>
                        {row?.trackName}
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                      {row?.releaseDate ? DateTransform(row?.releaseDate) : '-'}
                    </TableCell>
                    <TableCell align="right">
                      {row?.trackTimeMillis
                        ? milliSecondsToTime(row?.trackTimeMillis)
                        : '-'}
                    </TableCell>
                  </StyledTableRow>
                );
              }
              return <Fragment key={index} />;
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EpisodeTable;
