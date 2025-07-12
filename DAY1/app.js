const newElement = React.createElement(
  "div",
  { id: "header" },
 [ React.createElement(
    "div",
    { id: "para" },
    [React.createElement("h1", { id: "span1" }, "I am the best"),
    React.createElement("h2", { id: "span2" }, "I am the best"),
    React.createElement("h3", { id: "span3" }, "I am the best")]
  ),
   React.createElement(
    "div",
    { id: "para1" },
    [React.createElement("h3", { id: "span11" }, "I am the best"),
    React.createElement("h2", { id: "span22" }, "I am the best"),
    React.createElement("h1", { id: "span33" }, "I am the best")]
  )]
);
const main = document.getElementById("root");
const root = ReactDOM.createRoot(main);

root.render(newElement);
