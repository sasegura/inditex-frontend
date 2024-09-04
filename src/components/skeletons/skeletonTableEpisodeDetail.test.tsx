import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkeletonTableEpisode from './skeletonTableEpisodeDetail';

jest.mock('../episodeTable/episodeTable', () => ({
  StyledTableRow: (props: any) => <tr {...props} />,
}));

describe('SkeletonTableEpisode', () => {
  test('renders a table with skeleton rows', () => {
    render(<SkeletonTableEpisode />);

    expect(screen.getByRole('table')).toBeInTheDocument();

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Duration')).toBeInTheDocument();

    const skeletonRows = screen.getAllByRole('row');
    expect(skeletonRows).toHaveLength(22);

    expect(screen.getByTestId('name_1')).toBeInTheDocument();
    expect(screen.getByTestId('date_1')).toBeInTheDocument();
    expect(screen.getByTestId('duration_1')).toBeInTheDocument();
  });
});
