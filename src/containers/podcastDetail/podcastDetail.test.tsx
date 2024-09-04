import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import useHandlePodcastCache from '../../hooks/useHandlePodcastCache';
import { IPodcastDetail } from '../../interfaces/podcast';
import EpisodePage from '../../pages/episodePage/episodePage';
import userEvent from '@testing-library/user-event';
import { TestWrapper } from '../../utils/test/test';

jest.mock('../../hooks/useHandlePodcastCache', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

const CustomRender = () => {
  render(
    <TestWrapper
      url={'/podcast/1'}
      path={'/podcast/:podcastId'}
      children={<EpisodePage />}
    />,
  );
};

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
    mockUseParams.mockReturnValue({ podcastId: '1' });
    require('react-router-dom').useNavigate.mockReturnValue(mockUseNavigate);
    (useHandlePodcastCache as jest.Mock).mockImplementation(() => ({
      data: mockPodcastData,
      isLoading: false,
    }));
  });

  test('renders the podcast description when data is available', async () => {
    CustomRender();

    expect(await screen.findByText('Test Podcast')).toBeInTheDocument();
  });

  test('navigates to episode detail when episode is selected', () => {
    CustomRender();

    userEvent.click(screen.getByText(/Test Podcast/i));
    expect(mockUseNavigate).toHaveBeenCalledWith('/podcast/1');
  });
});
