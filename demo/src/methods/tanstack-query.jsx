import { useQuery } from "@tanstack/react-query";

const CAT_FACT_URL = "https://catfact.ninja/fact";

function useCatFact() {
  return useQuery({
    queryKey: ["cat-fact"],
    queryFn: async () =>
      fetch(CAT_FACT_URL)
        .then((res) => res.json())
        .then((json) => json.fact),
  });
}

export default function App() {
  const { data, isLoading, isError } = useCatFact();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  return <p>{data}</p>;
}
