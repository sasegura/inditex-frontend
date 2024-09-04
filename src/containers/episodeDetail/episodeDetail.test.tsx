import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import EpisodeDetail from './episodeDetail';
import useHandleEpisodeCache from '../../hooks/useHandleEpisodeCache';
import { IEpisode } from '../../interfaces/episode';
import { TestWrapper } from '../../utils/test/test';

jest.mock('../../hooks/useHandleEpisodeCache', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockEpisode: IEpisode = {
  trackId: 1,
  trackName: 'Episode 1',
  description: 'Description of Episode number 1',
  episodeUrl: 'http://example.com/audio.mp3',
  releaseDate: '2024-01-01',
  trackTimeMillis: 60000,
  wrapperType: 'audio',
};

const CustomRender = () => {
  render(
    <TestWrapper
      url={'/podcast/1/episode/1'}
      path={'/podcast/:podcastId/episode/:episodeId'}
      children={<EpisodeDetail />}
    />,
  );
};

describe('EpisodeDetail', () => {
  test('renders skeleton loader when data is loading', () => {
    (useHandleEpisodeCache as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: true,
    }));

    CustomRender();

    expect(screen.getByTestId('skeleton-episode-player')).toBeInTheDocument();
  });

  test('renders episode details when data is available', async () => {
    (useHandleEpisodeCache as jest.Mock).mockImplementation(() => ({
      data: [mockEpisode],
      isLoading: false,
    }));

    CustomRender();

    await waitFor(() => {
      expect(screen.getByText(/Episode 1/i)).toBeInTheDocument();
    });
  });
});
