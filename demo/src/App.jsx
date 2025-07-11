import { Link } from "react-router";
export default function App() {
  return (
    <section>
      <h1>Client-side Data Fetching in React</h1>
      <hr />
      <div>
        <p>vanilla React</p>
        <ul>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="/customHook">useEffect + customHook</Link>
          </li>
          <li>
            <Link to="/use">Suspense + use</Link>
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <p>libraries</p>
        <ul>
          <li>
            <Link to="/swr">SWR</Link>
          </li>
          <li>
            <Link to="/swr-suspense">SWR + Suspense</Link>
          </li>
          <li>
            <Link to="/tanstackQuery">TanStack Query</Link>
          </li>
          <li>
            <Link to="/tanstackQuery-suspense">TanStack Query + Suspense</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
