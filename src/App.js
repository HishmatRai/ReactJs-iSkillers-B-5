import React from "react";
import RouterNavigation from "./config/router";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
const App = () => {
  return (
    <Provider store={Store}>
      <RouterNavigation />
    </Provider>
  );
};
export default App;
