import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Home } from '.';
import { AppServiceContext } from '../common/services/app-service-context';
import { rickMortyMockService } from '../common/services/rick-morty/mock';

const SERVICES = {
  rickMorty: rickMortyMockService,
};

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0 } } });

const Wrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppServiceContext.Provider value={SERVICES}>
        <Home />
      </AppServiceContext.Provider>
    </QueryClientProvider>
  );
};

describe('<Home />', () => {
  it('should only display loading on first render', async () => {
    render(<Wrapper />);

    const loadingCharacters = screen.getByTestId('loading-characters');
    const characterList = screen.queryByTestId('character-list');
    const resultsInfo = screen.queryByTestId('results-info');
    const notFoundMessage = screen.queryByTestId('not-found-message');

    expect(loadingCharacters).toBeInTheDocument();
    expect(characterList).not.toBeInTheDocument();
    expect(resultsInfo).not.toBeInTheDocument();
    expect(notFoundMessage).not.toBeInTheDocument();
  });

  it('should display characters on the list', async () => {
    render(<Wrapper />);

    const loadingCharacters = screen.getByTestId('loading-characters');
    expect(loadingCharacters).toBeInTheDocument();

    const characters = await screen.findAllByTestId('character-item');
    expect(characters.length).toBeGreaterThan(0);

    const resultsInfo = await screen.findByTestId('results-info');
    expect(resultsInfo).toBeInTheDocument();

    const notFoundMessage = screen.queryByTestId('not-found-message');
    expect(notFoundMessage).not.toBeInTheDocument();

    expect(loadingCharacters).not.toBeInTheDocument();
  });

  fit('should only display not found message', async () => {
    const user = userEvent.setup();
    render(<Wrapper />);

    const name = 'not-found';
    const inputName = screen.getByRole('textbox', { name: 'Name' });

    await user.type(inputName, name);

    const notFoundMessage = await screen.findByTestId('not-found-message');
    expect(notFoundMessage).toBeInTheDocument();

    const loadingCharacters = screen.queryByTestId('loading-characters');
    const characterList = screen.queryByTestId('character-list');
    const resultsInfo = screen.queryByTestId('results-info');

    expect(loadingCharacters).not.toBeInTheDocument();
    expect(characterList).not.toBeInTheDocument();
    expect(resultsInfo).not.toBeInTheDocument();
  });
});
