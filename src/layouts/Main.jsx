import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";

const Main = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
    </Routes>
  );
};

export default Main;
