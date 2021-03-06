import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Counter from "./Components/CounterComponents";
import TodoComponent from "./Components/todoComponents";
const data = [
  { fname: "peter", email: "peter@gmail.com" },
  {
    fname: "Rohan",
    email: "rohan@gmail.com"
  },
  {
    fname: "Chintu",
    email: "chintu@gmail.com"
  }
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoComponent></TodoComponent>);
