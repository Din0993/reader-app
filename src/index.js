import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import store from "./components/redux";

// Importovan store iz reduxa i kreiran persistStore preko redux persista kako bi svi podaci ostali sacuvani
let persistor = persistStore(store);
// Provider pruza podatke iz store-a koji mu je prosledjen svim komponentama koje su njemu "deca"
// PersistGate samo cuva sve te podatke lokalno
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();
