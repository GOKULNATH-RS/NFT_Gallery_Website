import React from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-PrimaryDark  text-Primary absolute w-full">

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
