import { useState, useEffect } from "react";

const CAT_FACT_URL = "https://catfact.ninja/fact";

function useCatFact() {
  const [isLoading, setIsLoading] = useState(false);
  const [catFact, setCatFact] = useState(null);

  useEffect(() => {
    async function fetchCatFacts() {
      setIsLoading(true);
      const response = await fetch(CAT_FACT_URL);
      const json = await response.json();
      setCatFact(json["fact"]);
      setIsLoading(false);
    }

    fetchCatFacts();
  }, []);

  return { isLoading, catFact };
}

export default function App() {
  const { catFact, isLoading } = useCatFact();

  if (isLoading) return <p>Loading...</p>;
  return <p>{catFact}</p>;
}
