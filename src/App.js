import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-PrimaryDark  text-Primary absolute w-full overflow-x-hidden">
            <Header />
            <div className="mt-24">
            <Outlet />
            </div>
            <Footer />
      </div>
    </>    
   
  );
}

export default App;
