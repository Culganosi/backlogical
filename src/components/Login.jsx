import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const login = () => {
    axios
      .post("http://localhost:8080/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
        console.log(response.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div class="w-full max-w-xs">
        {/* <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> */}
        <div class="mb-4">
          <label
            class="block text-purple-700 text-lg font-press-start mb-4 tracking-wider"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-purple-700 text-lg font-press-start mb-4 tracking-wider"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={login}
            // disabled={!validateForm()}
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        {/* </form> */}
        <p class="text-center text-gray-500 text-xs">
          &copy;2022 Narshe Mines Corp. All rights reserved.
        </p>
      </div>
      <h1 className="text-green-600 font-press-start text-lg mt-10">
        {loginStatus}
      </h1>
    </div>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
