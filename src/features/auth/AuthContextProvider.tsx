import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLoading, selectLogin } from "./state/authSlice";
import SignInPage from "./pages/SignInPage";

export const AuthContextProvider: React.FC = (props) => {
  const isLogin = useSelector(selectLogin);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    //TODO
  }, []);

  if (loading) {
    return <>Loading...</>;
  } else {
    return (
      <>
        {isLogin ? (
          props.children
        ) : (
          <>
            <SignInPage />
          </>
        )}
      </>
    );
  }
};
