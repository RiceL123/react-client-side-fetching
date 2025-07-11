import { useQuery } from "@tanstack/react-query";

const CAT_FACT_URL = "https://catfact.ninja/fact";

function useCatFact() {
  return useQuery({
    queryKey: ["cat-fact"],
    queryFn: async () => {
      const response = await fetch(CAT_FACT_URL);
      return await response.json();
    },
  });
}

export default function App() {
  const { data, isLoading } = useCatFact();

  if (isLoading) return <p>Loading...</p>;
  return <p>{data["fact"]}</p>;
}
