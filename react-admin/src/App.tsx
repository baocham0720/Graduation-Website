import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";

import LayoutAdmin from "./components/LayoutAdmin";
import NoPage from "./pages/NoPage";
import LoginPage from "./pages/LoginPage";


const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <LayoutAdmin /> */}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutAdmin />}>
              {/* <Route path="/staffs" element={< />} /> */}
            </Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
