import { render, screen } from '@testing-library/react';
import HeaderSection from './headerSection';
import { TestWrapper } from '../../utils/test/test';

describe('Header', () => {
  test('Show the Podcaster title', () => {
    render(
      <TestWrapper>
        <HeaderSection isLoading={false} />
      </TestWrapper>,
    );
    const titleElement = screen.getByText('Podcaster');
    expect(titleElement).toBeInTheDocument();
  });
});
