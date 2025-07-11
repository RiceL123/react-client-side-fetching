import { Suspense, use } from "react";

const CAT_FACT_URL = "https://catfact.ninja/fact";

function CatFact({ catFactPromise }) {
  const catFact = use(catFactPromise);
  return <p>{catFact}</p>;
}

export default function App() {
  const catFactPromise = fetch(CAT_FACT_URL)
    .then((res) => res.json())
    .then((json) => json.fact);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CatFact catFactPromise={catFactPromise} />
    </Suspense>
  );
}
