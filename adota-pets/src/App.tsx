import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./helpers/Loading";
import { lazy, Suspense } from "react";
import NotFound from "./components/NotFound/NotFound";
import Adoptions from "./components/Adoptions/Adoptions";

const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const ListAnimals = lazy(() => import("./components/ListAnimals/ListAnimals"));
const ListVolunteer = lazy(
  () => import("./components/ListVolunteer/ListVolunteer")
);
const Eventos = lazy(() => import("./components/Eventos/Eventos"));
const Settings = lazy(() => import("./components/Settings/Settings"));

function App() {
  return (
    <BrowserRouter>
      <main className="grid min-h-screen sm:grid-cols-[300px_1fr] grid-cols-1 ">
        <Navbar />
        <div className=" pt-12 ">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              }
            ></Route>
            <Route
              path="/listarAnimais"
              element={
                <Suspense fallback={<Loading />}>
                  <ListAnimals />
                </Suspense>
              }
            ></Route>
            <Route
              path="/adocoes"
              element={
                <Suspense fallback={<Loading />}>
                  <Adoptions />
                </Suspense>
              }
            ></Route>
            <Route
              path="/voluntarios"
              element={
                <Suspense fallback={<Loading />}>
                  <ListVolunteer />
                </Suspense>
              }
            ></Route>
            <Route
              path="/eventos"
              element={
                <Suspense fallback={<Loading />}>
                  <Eventos />
                </Suspense>
              }
            ></Route>
            <Route
              path="/configuracoes"
              element={
                <Suspense fallback={<Loading />}>
                  <Settings />
                </Suspense>
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
