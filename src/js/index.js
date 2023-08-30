// react libraries
import React from "react";
import ReactDOM from "react-dom";

// styles
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// my components
import Home from "./component/home.jsx";

//render my app in HTML doc.
ReactDOM.render(<Home />, document.querySelector("#app"));
