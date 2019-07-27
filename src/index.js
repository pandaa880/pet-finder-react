const Pet = ({name, animal, breed}) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  );
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me"),
      React.createElement(Pet, {
        name: "Vegas",
        animal: "Dog",
        breed: "Golden Retriever"
} ),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Parrot"
} ),
      React.createElement(Pet, {
        name: "Medusa",
        animal: "Snake",
        breed: "Cobra"
} ),
    ]
  );
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
)