import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./helpers/Loading";
import { lazy, Suspense } from "react";
import NotFound from "./components/NotFound/NotFound";

const Dashboard = lazy(()=>import('./components/Dashboard/Dashboard') )

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Suspense fallback={<Loading/>}><Dashboard/></Suspense>}></Route>
         <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
