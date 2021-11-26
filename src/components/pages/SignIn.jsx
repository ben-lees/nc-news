import React, { useContext, useEffect } from "react";
// import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { login } from "./userlogin";
import { getUsers } from "../../utils/getUsers";

function SignIn() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    getUsers().then((res) => {
      setUser(res.data.users);
    });
  }, []);
  //map username string for user
  //pass username in to url
  console.log(user);

  return (
    <div>
      <main>
        <h1>Sign in here!</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {user ? (
          <button
            onClick={() => {
              setUser(null);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={async () => {
              const user = await login();
              setUser(user);
            }}
          >
            Login
          </button>
        )}
      </main>
    </div>
  );
}

export default SignIn;
