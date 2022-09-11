import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Edit } from "./pages/edit";
import { List } from "./pages/list";
import { Home } from "./pages/home";
import "./index.scss";
const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/edit" element={<Edit />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Edit add={setData} />
      <List listData={data} deleteData={setData} /> */}
    </div>
  );
};

export default App;
