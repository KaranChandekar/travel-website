import React from "react";
import Home from "./components/Home";
import Places from "./components/Places";
import Discover from "./components/Discover";

const App = () => {
  return (
    <React.Fragment>
      <Home />
      <Places />
      <Discover />
    </React.Fragment>
  );
};

export default App;
