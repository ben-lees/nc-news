import React, { useContext } from "react";
// import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { login } from "./userlogin";

function SignIn() {
  // useEffect(() => {
  //   axios.get("https://nc-news-working.herokuapp.com/api/users").then((res) => {
  //     setUser(res.data.users);
  //   });
  // }, []);

  const { user, setUser } = useContext(UserContext);

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
