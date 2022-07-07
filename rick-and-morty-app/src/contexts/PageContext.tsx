/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, ReactNode, useState,
} from 'react';

type PageContextType = {
  pageNumber: number,
  handlePrevPage: () => void,
  handleNextPage: () => void,
  setFirstPage: () => void,
}

export const PageContext = createContext({} as PageContextType);

type PageProviderProps = {
  children: ReactNode;
}

export default function PageProvider({ children }: PageProviderProps) {
  const [pageNumber, setPageNumber] = useState(1);

  function handleNextPage() {
    setPageNumber((prevState) => prevState + 1);
  }

  function handlePrevPage() {
    setPageNumber((prevState) => prevState - 1);
  }

  function setFirstPage() {
    setPageNumber(1);
  }

  return (
    <PageContext.Provider value={{
      pageNumber, setFirstPage, handlePrevPage, handleNextPage,
    }}
    >
      {children}
    </PageContext.Provider>
  );
}
