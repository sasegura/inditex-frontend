import { render, screen } from '@testing-library/react';
import { TestWrapper } from '../../utils/test/test';
import Podcasts from './podcasts';
import { PodcastsMock } from '../../utils/test/mocks';
import { transformPodcast } from '../../utils/utils';

const firstPodcastsMock = transformPodcast(PodcastsMock)[0];

describe('Podcast card', () => {
  const handleClick = () => {
    return;
  };

  test('show author and name values', async () => {
    render(
      <TestWrapper>
        <Podcasts podcast={firstPodcastsMock} onHandleClick={handleClick} />
      </TestWrapper>,
    );

    const name = screen.getByText(
      firstPodcastsMock.name.toString().toUpperCase(),
    );
    const author = screen.getByText(
      `Author: ${firstPodcastsMock.author.toString()}`,
    );
    expect(name).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });
});
