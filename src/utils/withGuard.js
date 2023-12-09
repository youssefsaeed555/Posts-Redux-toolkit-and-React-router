import React from "react";
import { useSelector } from "react-redux";

function withGuard(Component) {
  //solution 3 with HOC
  const Wrapper = (props) => {
    const { isLoggedIn } = useSelector((state) => state.auth);

    return isLoggedIn ? (
      <Component {...props} />
    ) : (
      <div>you should login to access route</div>
    );
  };
  return Wrapper;
}

export default withGuard;
