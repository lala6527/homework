import { useState, useEffect, useRef } from "react";
import{Edit} from"./pages/edit";
import {List} from "./page/list";
import "./index.scss";
const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Edit add={setData}  />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
