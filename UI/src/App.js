import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard page="frontPage" />} />
        <Route exact path="/asset/add" element={<Dashboard page="asset/add" />} />
        <Route exact path="/asset/view" element={<Dashboard page="asset/view" />} />
        <Route exact path="/type/add" element={<Dashboard page="type/add" />} />
        <Route exact path="/type/view" element={<Dashboard page="type/view" />} />
        <Route exact path="/log/view" element={<Dashboard page="log/view" />} />
        <Route exact path="/asset/delete" element={<Dashboard page="asset/delete" />} />
        <Route exact path="/type/delete" element={<Dashboard page="type/delete" />} />
        <Route exact path="/asset/open/:openAssetId" element={<Dashboard page="asset/open" />} />
        <Route exact path="/asset/edit/:editAssetId" element={<Dashboard page="asset/edit" />} />
        <Route exact path="/login" element={<Dashboard page="login" />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
