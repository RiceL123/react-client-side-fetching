import { useState, useEffect } from "react";

const CAT_FACT_URL = "https://catfact.ninja/fact";

export default function App() {
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
  }, []); // empty dependency array to run once on mount

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  return <p>{catFact}</p>;
}
