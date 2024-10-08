import { useCallback, useEffect } from "react";
import { checkAuthStatus } from "../../services/Authentication";
import { useAuth } from "./AuthContext";

const useIsLoggedIn = function () {
  const { dispatch } = useAuth();

  const checkIsLoggedIn = useCallback(async () => {
    try {
      dispatch({ type: "auth/loading" });
      const user = await checkAuthStatus();
      if (!user) return;
      dispatch({
        type: "auth/login",
        payload: typeof user === "boolean" ? {} : user.user,
      });
    } catch (err) {
      dispatch({
        type: "auth/error",
      });
    }
  }, [dispatch]);

  useEffect(() => {
    // if (isAuthenticated) return;
    checkIsLoggedIn();
  }, [checkIsLoggedIn, dispatch]);

  return null;
};

export default useIsLoggedIn;
