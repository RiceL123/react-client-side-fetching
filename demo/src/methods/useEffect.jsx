import { useState, useEffect } from "react";

const CAT_FACT_URL = "https://catfact.ninja/fact";

export default function App() {
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

  if (isLoading) return <p>Loading...</p>;
  return <p>{catFact}</p>;
}
