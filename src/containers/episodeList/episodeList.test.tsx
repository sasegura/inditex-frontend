import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import EpisodeList from './episodeList';
import { IEpisode } from '../../interfaces/episode';
import userEvent from '@testing-library/user-event';

import useHandleEpisodeCache from '../../hooks/useHandleEpisodeCache';
import { useParams, useNavigate } from 'react-router-dom';
import { TestWrapper } from '../../utils/test/test';

jest.mock('../../hooks/useHandleEpisodeCache', () => jest.fn());
jest.mock('../../hooks/useSetIsLoadingPage', () => jest.fn());
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

const mockEpisodes: IEpisode[] = [
  {
    trackId: 1,
    trackName: 'Episode name 1',
    description: 'Description 1',
    episodeUrl: '/s',
    releaseDate: '',
    trackTimeMillis: 0,
    wrapperType: '',
  },

  {
    trackId: 1,
    trackName: 'Episode 1',
    description: 'Description 1',
    episodeUrl: '/s',
    releaseDate: '',
    trackTimeMillis: 0,
    wrapperType: '',
  },
  {
    trackId: 2,
    trackName: 'Episode 2',
    description: 'Description 2',
    episodeUrl: '/s',
    releaseDate: '',
    trackTimeMillis: 0,
    wrapperType: '',
  },
];

const CustomRender = () => {
  render(
    <TestWrapper
      url={'/podcast/1/'}
      path={'/podcast/:podcastId'}
      children={<EpisodeList />}
    />,
  );
};

describe('EpisodeList', () => {
  const mockUseNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigate as jest.Mock).mockReturnValue(mockUseNavigate);
    (useParams as jest.Mock).mockReturnValue({ podcastId: '1' });
  });

  test('renders loading state correctly', () => {
    (useHandleEpisodeCache as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: true,
      isError: false,
    }));

    CustomRender();

    const firstSkeleton = screen.getByTestId(`name_1`);
    expect(firstSkeleton).toBeInTheDocument();
  });

  test('renders error state correctly', () => {
    (useHandleEpisodeCache as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: false,
      isError: true,
    }));

    CustomRender();

    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  test('renders episode list correctly when data is available', () => {
    (useHandleEpisodeCache as jest.Mock).mockImplementation(() => ({
      data: mockEpisodes,
      isLoading: false,
      isError: false,
    }));

    CustomRender();

    expect(screen.getByText(/Episode 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Episode 2/i)).toBeInTheDocument();
    expect(screen.getByTestId('EpisodeTable')).toBeInTheDocument();
  });

  test('navigates to episode detail when episode is selected', () => {
    (useHandleEpisodeCache as jest.Mock).mockImplementation(() => ({
      data: mockEpisodes,
      isLoading: false,
      isError: false,
    }));

    CustomRender();

    userEvent.click(screen.getByText('Episode 1'));
    expect(mockUseNavigate).toHaveBeenCalledWith('episode/1');
  });
});
