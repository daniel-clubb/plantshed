import React from "react";
import NewEdition from "../NewEdition";
import "./Home.css";

export default function Home() {
  return (
    <>
      <main>
        <h3>Welcome to PlantShed</h3>
        <p className="intro-text">
          We sell plants and coffee beans from all over the world as well as
          offering floral cafés at our stores
        </p>
        <NewEdition />
      </main>
    </>
  );
}
