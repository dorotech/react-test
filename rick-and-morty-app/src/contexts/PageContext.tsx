import { createContext, ReactNode, useState } from 'react';

type PageContextType = {
  pageNumberContext: number,
  setFirstPageContext: () => void,
  handlePrevPageContext: () => void,
  handleNextPageContext: () => void,
}

export const PageContext = createContext({} as PageContextType);

type PageProviderProps = {
  children: ReactNode;
}

export default function PageProvider({ children }: PageProviderProps) {
  const [pageNumberContext, setPageNumberContext] = useState(1);

  function handleNextPageContext() {
    setPageNumberContext((prevState) => prevState + 1);
  }

  function handlePrevPageContext() {
    setPageNumberContext((prevState) => prevState - 1);
  }

  function setFirstPageContext() {
    setPageNumberContext(1);
  }

  return (
    <PageContext.Provider value={{
      pageNumberContext, setFirstPageContext, handlePrevPageContext, handleNextPageContext,
    }}
    >
      {children}
    </PageContext.Provider>
  );
}
