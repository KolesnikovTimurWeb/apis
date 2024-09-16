import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./features/Header";
import Footer from "./features/Footer";
import Navigation from "./features/Navigation";
import HomeMobile from "./pages/HomeMobile";
import HeaderMobile from "./features/HeaderMobile";
import NavigationMobile from "./features/NavigationMobile";
import HeaderNavigation from "./features/HeaderNavigation";

function App() {
  const isMobile = window.innerWidth;

  return (
    <div>
      {isMobile < 1200 ? <HeaderMobile /> : <Header />}
      {isMobile < 1200 ? <NavigationMobile /> : <Navigation />}
      {isMobile < 1200 && <HeaderNavigation />}
      <Routes>
        <Route path="/" element={isMobile < 1200 ? <HomeMobile /> : <Home />} />
        <Route path="/hallo" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
