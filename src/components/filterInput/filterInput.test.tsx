import { render, screen } from '@testing-library/react';
import { TestWrapper } from '../../utils/test/test';
import FilterInput from './filterInput';
import { ChangeEvent } from 'react';

describe('Filter Input', () => {
  let filterInputValue = 'filterInputValue';
  const onChangeValue = (newValue: ChangeEvent<HTMLInputElement>) => {
    filterInputValue = newValue.target.value;
  };

  test('show the filter input value', async () => {
    render(
      <TestWrapper>
        <FilterInput
          onChange={(newValue: ChangeEvent<HTMLInputElement>) =>
            onChangeValue(newValue)
          }
          value={filterInputValue}
          size={10}
        />
      </TestWrapper>,
    );

    const text = screen.getByLabelText('Filter podcasts...');
    expect(text).toHaveValue(filterInputValue);
  });
});
