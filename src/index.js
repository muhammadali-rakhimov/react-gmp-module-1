import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  React.createElement(
    "div",
    null,
    "Hello World!",
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, "1st element of the list"),
      React.createElement("li", null, "2st element of the list"),
      React.createElement("li", null, "3st element of the list")
    )
  )
);
