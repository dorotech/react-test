import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Home } from '.';
import { AppServiceContext } from '../common/services/app-service-context';
import { rickMortyMockService } from '../common/services/rick-morty/mock';

const SERVICES = {
  rickMorty: rickMortyMockService,
};

const queryClient = new QueryClient();

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

  it.todo('should only display not found message');
});
