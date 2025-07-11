import { Suspense } from "react";
import useSWR from "swr";

const CAT_FACT_URL = "https://catfact.ninja/fact";

const fetcher = (url) => fetch(url).then((res) => res.json());

function CatFact() {
  const { data } = useSWR(CAT_FACT_URL, fetcher, { suspense: true });
  return <p>{data["fact"]}</p>;
}

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CatFact />
    </Suspense>
  );
}
