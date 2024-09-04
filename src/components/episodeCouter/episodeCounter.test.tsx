import { render, screen } from '@testing-library/react';
import { TestWrapper } from '../../utils/test/test';
import EpisodeCounter from './episodeCounter';

const episodeCounter = 12;
describe('Episode Counter', () => {
  test('show the episode counter value', async () => {
    render(
      <TestWrapper>
        <EpisodeCounter counter={episodeCounter} isLoading={false} />
      </TestWrapper>,
    );
    const counter = screen.getByText(`Episodes: ${episodeCounter}`);

    expect(counter).toBeInTheDocument();
  });

  test('do not show the episode counter value', async () => {
    render(
      <TestWrapper>
        <EpisodeCounter counter={episodeCounter} isLoading={true} />
      </TestWrapper>,
    );
    const counter = screen.queryByText(`Episodes: ${episodeCounter}`);

    expect(counter).not.toBeInTheDocument();
  });
});
