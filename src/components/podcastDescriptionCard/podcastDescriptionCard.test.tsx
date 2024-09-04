import { render, screen } from '@testing-library/react';
import { TestWrapper } from '../../utils/test/test';

import { PodcastsMock } from '../../utils/test/mocks';
import PodcastDescriptionCard from './podcastDescriptionCard';
import { transformPodcast } from '../../utils/utils';

const firstPodcastsMock = transformPodcast(PodcastsMock)[0];

describe('Filter Input', () => {
  const handleClick = () => {
    return;
  };

  test('show the filter input value', async () => {
    render(
      <TestWrapper>
        <PodcastDescriptionCard
          podcast={firstPodcastsMock}
          onHandleCardClick={handleClick}
        />
      </TestWrapper>,
    );

    const title = screen.getByText(firstPodcastsMock.name.toString());
    const authorTest = screen.getByText(
      `by ${firstPodcastsMock.author.toString()}`,
    );
    const description = screen.getByText(
      `${firstPodcastsMock.description.toString()}`,
    );

    const image = screen.getByAltText('imageTitle');

    expect(image).toHaveAttribute('src', firstPodcastsMock.imageUrl.toString());

    expect(title).toBeInTheDocument();
    expect(authorTest).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
