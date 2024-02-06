import Dashboard from "./components/Dashboard";
import ViewAssets from "./components/ViewAssets";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard page="add" />} />
        <Route exact path="/view" element={<Dashboard page="view" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
