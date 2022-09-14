import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Todo } from "./pages/todo";
import { Home } from "./pages/home";
import "./index.scss";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
