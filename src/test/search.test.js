import { fireEvent, render } from '@testing-library/react';
import Search from '../components/Search/Search';

describe('User can see Search bar at top Screen', () => {
  test('user can type search', () => {
    const utils = render(<Search />);
    const input = utils.getByLabelText('search-id');

    fireEvent.change(input, { target: { value: 'naruto' } });
    expect(input.value).toBe('naruto');
  });
});
