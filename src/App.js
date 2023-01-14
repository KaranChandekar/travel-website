import React from "react";
import Home from "./components/Home";
import Places from "./components/Places";
import Discover from "./components/Discover";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Home />
      <Places />
      <Discover />
      <Footer />
    </React.Fragment>
  );
};

export default App;
