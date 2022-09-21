import App from "./App";
import "./index.sass";
import reportWebVitals from "./reportWebVitals";
import mainStore from "./stores/mainStore";
import axios from "axios";
import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import { ModalConstructor } from "./components/modals/ModalConstructor";

axios.defaults.baseURL = "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1";

ReactDOM.render(
  <React.StrictMode>
    <Provider {...mainStore}>
      <App />
      <ModalConstructor />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
