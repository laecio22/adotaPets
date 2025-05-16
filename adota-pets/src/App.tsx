import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./helpers/Loading";
import { lazy, Suspense } from "react";
import NotFound from "./components/NotFound/NotFound";

const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen  ">
        <Navbar />
        <div className="flex-1 pt-8">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
