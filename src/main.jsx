import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Logincontext from "./context/Logincontext.jsx";
import Themecontext from "./context/Themecontext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient({
  defaultOptions:{
queries:{
  refetchOnWindowFocus:false
}
  }
}
);
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Toaster></Toaster>
    <Themecontext>
      <Logincontext>
        <App />
      </Logincontext>
    </Themecontext>
  </QueryClientProvider>
);
