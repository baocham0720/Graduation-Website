import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";

import LayoutAdmin from "./components/LayoutAdmin";


const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <LayoutAdmin /> */}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutAdmin />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
