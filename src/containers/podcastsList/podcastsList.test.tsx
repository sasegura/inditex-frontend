import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import useHandlePodcastCache from '../../hooks/useHandlePodcastCache';
import { IPodcastDetail } from '../../interfaces/podcast';
import PodcastsList from './podcastsList';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/useHandlePodcastCache', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

const mockPodcastData: IPodcastDetail[] = [
  {
    id: '1',
    name: 'Test Podcast',
    imageUrl: 'test-url',
    description: 'Test description',
    author: 'Test Author',
    title: 'test',
  },
];
describe('PodcastDetail', () => {
  const mockUseNavigate = jest.fn();
  const mockUseParams = require('react-router-dom').useParams;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseParams.mockReturnValue({ podcastId: '1' });
    require('react-router-dom').useNavigate.mockReturnValue(mockUseNavigate);
  });

  test('renders the podcast description when data is available', async () => {
    (useHandlePodcastCache as jest.Mock).mockImplementation(() => ({
      data: mockPodcastData,
      isLoading: false,
    }));

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<PodcastsList />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByText(/Test Podcast/i)).toBeInTheDocument();
  });

  test('navigates to episode detail when episode is selected', () => {
    (useHandlePodcastCache as jest.Mock).mockImplementation(() => ({
      data: mockPodcastData,
      isLoading: false,
    }));

    render(
      <MemoryRouter initialEntries={['/podcast/1']}>
        <Routes>
          <Route path='/podcast/:podcastId' element={<PodcastsList />} />
        </Routes>
      </MemoryRouter>,
    );

    userEvent.click(screen.getByText(/Test Podcast/i));
    expect(mockUseNavigate).toHaveBeenCalledWith('podcast/1');
  });
});
