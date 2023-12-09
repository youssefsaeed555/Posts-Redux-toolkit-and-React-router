import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function WithGuard({ children }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  //solution 1 if you want navigate if not login
  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       return navigate("/");
  //     }
  //   }, [isLoggedIn]);
  //   return children;

  //solution 2 if you want to show message
  return isLoggedIn ? children : <div>you should login to access route</div>;
}

export default WithGuard;
