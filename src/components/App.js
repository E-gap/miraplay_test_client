import { Route, Routes } from "react-router-dom";
import { useEffect, lazy } from "react";
// import logo from "./logo.svg";
// import "./App.css";
/* const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage")); */
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SharedLayout from "./SharedLayout/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
