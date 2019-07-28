import React from "react";
import Pet from "./Pet";

function App() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Vegas",
      animal: "Dog",
      breed: "Golden Retriever"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Parrot"
    }),
    React.createElement(Pet, {
      name: "Medusa",
      animal: "Bird",
      breed: "Cobra"
    })
  ]);
}

export default App;
