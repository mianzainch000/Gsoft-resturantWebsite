import React from "react";
import "./App.css";
import { RouterComp } from "./Router";
import store, { persistor } from "./Redux/Store/store";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterComp />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
