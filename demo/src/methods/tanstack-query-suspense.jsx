import { Suspense } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

const CAT_FACT_URL = "https://catfact.ninja/fact";

function useCatFact() {
  return useSuspenseQuery({
    queryKey: ["cat-fact"],
    queryFn: async () => {
      const response = await fetch(CAT_FACT_URL);
      return await response.json();
    },
  });
}

function CatFact() {
  const { data } = useCatFact();
  return <p>{data["fact"]}</p>;
}

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CatFact />
    </Suspense>
  );
}
