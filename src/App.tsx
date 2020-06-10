import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import registerIcons from "./registerIcons";
import { store, persistor } from "./redux/store";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Categories from "./components/Categories";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";

registerIcons();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <Header />
          <div className="content">
            <Profile />
            <Categories />
            <Projects />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
