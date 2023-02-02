import { createContext, useContext } from 'react';
import { rickMortyService } from '../rick-morty';

const SERVICES = {
  rickMorty: rickMortyService,
};

export const AppServiceContext = createContext<typeof SERVICES | undefined>(undefined);

export const useAppServiceContext = () => {
  const ctx = useContext(AppServiceContext);

  if (!ctx)
    throw new Error('It seems you are trying to use AppServiceContext outside its provider.');

  return ctx;
};

export function AppServiceProvider({ children }: { children: JSX.Element }) {
  return <AppServiceContext.Provider value={SERVICES}>{children}</AppServiceContext.Provider>;
}
