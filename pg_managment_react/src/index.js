import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import configure from "./redux/store";
import "../src/css/body.css"

const store=configure()

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter> ,document.getElementById("root"))