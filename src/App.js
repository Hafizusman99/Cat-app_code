import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
