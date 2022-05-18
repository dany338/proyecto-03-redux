import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { listRoute } from "./data";

import { validateAuth } from "../redux/actions/auth";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateAuth());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {listRoute.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
