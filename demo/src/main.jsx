import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.jsx";

import UseEffectApp from "./methods/useEffect.jsx";
import CustomHookApp from "./methods/useEffect-custom-hook.jsx";
import TanstackQueryApp from "./methods/tanstack-query.jsx";
import UseApiApp from "./methods/use.jsx";
import UseCustomHookApp from "./methods/useEffect-custom-hook.jsx";
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
          <Route path="/use" element={<UseApiApp />} />
          <Route path="/use-customHook" element={<UseCustomHookApp />} />
          <Route path="/tanstackQuery" element={<TanstackQueryApp />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
