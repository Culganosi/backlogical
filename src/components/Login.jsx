import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const login = () => {
    axios
      .post(
        "http://localhost:8080/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          // setLoginStatus(response.data[0].username);
          setAuth(true);
          let auth = true;
          localStorage.setItem("auth", JSON.stringify(auth));
          console.log(response.data);
          localStorage.setItem(
            "user",
            JSON.stringify(response.data[0].username)
          );
        }
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="flex justify-center items-center font-press-start text-purple-600 text-4xl mt-72">
        Log In
      </h1>
      <div className="w-full max-w-xs mt-24">
        <div className="mb-4">
          <label
            className="block text-purple-700 text-lg font-press-start mb-4 tracking-wider"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-purple-700 text-lg font-press-start mb-4 tracking-wider"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={login}
          >
            Sign In
          </button>
          <Link to="/register">
            <a
              className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
              href="#"
            >
              Create Account
            </a>
          </Link>
        </div>
        <p className="text-center text-gray-500 text-xs py-4">
          &copy;2022 Narshe Mines Corp. All rights reserved.
        </p>
      </div>
      <h1 className="text-green-600 font-press-start text-lg">{loginStatus}</h1>
    </div>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
