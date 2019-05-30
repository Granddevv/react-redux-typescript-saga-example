import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import ItemList from "./containers/itemList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ItemList />
      </Provider>
    );
  }
}

export default App;
