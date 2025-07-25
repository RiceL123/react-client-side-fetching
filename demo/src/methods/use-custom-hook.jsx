import { Suspense, use } from "react";
import { ErrorBoundary } from "react-error-boundary";

const CAT_FACT_URL = "https://catfact.ninja/fact";

function useCatPromise() {
  return fetch(CAT_FACT_URL)
    .then((res) => res.json())
    .then((json) => json.fact);
  // .catch(() => "Error...");
}

function CatFact({ catPromise }) {
  const catFact = use(catPromise);

  return <p>{catFact}</p>;
}

export default function App() {
  const catPromise = useCatPromise();
  return (
    <ErrorBoundary fallback={<p>Error...</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <CatFact catPromise={catPromise} />
      </Suspense>
    </ErrorBoundary>
  );
}
