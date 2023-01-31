import React, { useEffect, useState } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import CharList from "../components/CharList";
import Error from "../components/Error";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import { useToast } from "../hooks/useToast";
import { Characters } from "../interfaces/Services";
import getCharacters from "../services/get/getCharacters";
import serializeParams from "../utils/serializeParams";

export default function Home() {
  const { toast } = useToast();
  const [charactersInfo, setCharactersInfo] = useState<Characters>({
    info: {
      pages: 0,
    },
    results: [],
  });
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObj = Object.fromEntries(searchParams.entries());

  const [queryParams, setQueryParams] = useState({
    page: searchParamsObj.page || "1",
    name: searchParamsObj.name || "",
    status: searchParamsObj.status || "none",
    gender: searchParamsObj.gender || "none",
    species: searchParamsObj.species || "none",
  });

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const params = serializeParams(queryParams); // remove parametros não utilizados
      const { data } = await getCharacters(params);
      setLoading(false);
      setCharactersInfo(data);
      setSearchParams(params as unknown as URLSearchParamsInit); // atualiza a url
    } catch (error: any) {
      if (error?.response?.status === 404) {
        toast.error("Characters not found for given filters.", {
          toastId: "error",
        });
        setReload(true);
      } else {
        toast.error("Something went wrong, try again later!", {
          toastId: "error",
        });
        setError(true);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (reload) {
      setReload(false);
      setQueryParams({
        page: "1",
        name: "",
        status: "none",
        gender: "none",
        species: "none",
      });
      fetchCharacters();
    }
  }, [reload]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [queryParams.page]);

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div className="main">
      <Header />
      <Filters
        setQueryParams={setQueryParams}
        queryParams={queryParams}
        setCharList={setCharactersInfo}
        setLoading={setLoading}
      />
      <CharList characters={charactersInfo.results} />
      <Pagination
        count={charactersInfo.info.pages}
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
    </div>
  );
}
