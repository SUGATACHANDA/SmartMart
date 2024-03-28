import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import "./style.css"
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import SplashScreen from "./SplashScreen.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SplashScreen/>
    </Provider>
  </React.StrictMode>
);
