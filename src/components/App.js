import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { RestrictedRoute } from "../utils/RestrictedRoute";
import { PrivateRoute } from "../utils/PrivateRoute";

import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SharedLayout from "./SharedLayout/SharedLayout";

// import { selectIsUserLoading } from "../redux/selectors";
import { useDispatch /* useSelector */ } from "react-redux";
import { refresh } from "../redux/auth/authOperations";

function App() {
  const dispatch = useDispatch();
  /* const IsLoading = useSelector(selectIsUserLoading); */

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<PrivateRoute component={HomePage} redirectTo="/login" />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={Login} redirectTo="/" />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={Register} redirectTo="/" />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
