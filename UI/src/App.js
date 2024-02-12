import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard page="add" />} />
        <Route exact path="/view" element={<Dashboard page="view" />} />
        <Route exact path="/type/add" element={<Dashboard page="type/add" />} />
        <Route exact path="/type/view" element={<Dashboard page="type/view" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
