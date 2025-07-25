import { useState, useEffect } from "react";

const CAT_FACT_URL = "https://catfact.ninja/fact";

function useFetchCatFact() { // 'use' prefix
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [catFact, setCatFact] = useState(null);

  useEffect(() => {
    async function fetchCatFacts() {
      setIsLoading(true);
      fetch(CAT_FACT_URL)
        .then((res) => res.json())
        .then((json) => setCatFact(json.fact))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }

    fetchCatFacts();
  }, []);

  return { isError, isLoading, catFact };
}

export default function App() {
  const { isError, isLoading, catFact } = useFetchCatFact();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  return <p>{catFact}</p>;
}
