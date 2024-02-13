import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard page="asset/add" />} />
        <Route exact path="/asset/add" element={<Dashboard page="asset/add" />} />
        <Route exact path="/asset/view" element={<Dashboard page="asset/view" />} />
        <Route exact path="/type/add" element={<Dashboard page="type/add" />} />
        <Route exact path="/type/view" element={<Dashboard page="type/view" />} />
        <Route exact path="/log/view" element={<Dashboard page="log/view" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
