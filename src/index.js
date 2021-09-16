import React from "react";
import ReactDOM from "react-dom";

import "./stylesheets/normalise.css";
import "./stylesheets/reset.css";
import "./index.css";
import App from "./components/App";

import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
