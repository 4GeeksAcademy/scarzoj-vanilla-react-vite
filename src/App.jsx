import { NavBar } from "./components/Navbar"

import { Routes, Route } from "react-router";
import { pages } from "./utils/pages";
import { LandingPage } from "./pages/LandingPage";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {pages.map((page)=>{
          return (
            <Route path={page.route} element={page.component}/>
          )
        })}
        <Route path="*" element={<LandingPage/>}/>
      </Routes>
    </>
  );
};
