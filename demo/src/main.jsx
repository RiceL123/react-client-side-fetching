import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.jsx";

import UseEffectApp from "./methods/useEffect.jsx";
import CustomHookApp from "./methods/useEffect-custom-hook.jsx";
import TanstackQueryApp from "./methods/tanstack-query.jsx";
import TanstackQuerySuspenseApp from "./methods/tanstack-query-suspense.jsx"
import SwrApp from "./methods/swr.jsx";
import SwrSuspenseApp from "./methods/swr-suspense.jsx";
import UseHookApp from "./methods/use.jsx";
import Header from "./Navbar.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<App />} />
          <Route path="/useEffect" element={<UseEffectApp />} />
          <Route path="/customHook" element={<CustomHookApp />} />
          <Route path="/tanstackQuery" element={<TanstackQueryApp />} />
          <Route path="/tanstackQuery-suspense" element={<TanstackQuerySuspenseApp />} />
          <Route path="/swr" element={<SwrApp />} />
          <Route path="/swr-suspense" element={<SwrSuspenseApp />} />
          <Route path="/use" element={<UseHookApp />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
