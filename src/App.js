import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddShare from "./components/AddShare";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/addshare" exact element={<AddShare />} />
    </Routes>
  );
}

export default App;
