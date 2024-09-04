import { Box, Grid, TextField } from '@mui/material';
import './filterInput.css';
import { ChangeEvent, ReactElement } from 'react';

interface filterInputProps {
  filterValue?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  size: number;
}

const FilterInput = ({
  value,
  onChange,
  size,
}: filterInputProps): ReactElement => {
  return (
    <Grid
      item
      xs={12}
      sx={{ pr: 5, pt: 5, mb: 0 }}
      container
      justifyContent="flex-end">
      <Grid item xs={1}>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            p: '5px',
            textAlign: 'center',
            margin: '5px 20px',
            borderRadius: '8px',
          }}
          data-testid={'podcastCounter'}>
          {size}
        </Box>
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Filter podcasts..."
          id="outlined-size-small"
          size="small"
          className="inputSearch"
          value={value}
          onChange={onChange}
          type="search"
        />
      </Grid>
    </Grid>
  );
};

export default FilterInput;
