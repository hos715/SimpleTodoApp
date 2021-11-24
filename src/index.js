import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./container/App";
import GlobalState from "./container/GlobalState";

render(
  <GlobalState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalState>,
  document.getElementById("root")
);
