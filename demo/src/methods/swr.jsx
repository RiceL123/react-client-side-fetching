import useSWR from "swr";

const CAT_FACT_URL = "https://catfact.ninja/fact";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, isLoading } = useSWR(CAT_FACT_URL, fetcher);

  if (isLoading) return <p>Loading...</p>;
  return <p>{data["fact"]}</p>;
}
