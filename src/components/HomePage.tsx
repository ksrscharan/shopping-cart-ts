import React from "react";

import Cards from "./Cards";
import NavBar from "./NavBar";

function HomePage(): JSX.Element {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row justify-content-lg-center">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
