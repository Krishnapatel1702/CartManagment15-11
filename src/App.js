import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/Store";
import Items from "./Items";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Items />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
