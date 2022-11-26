import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const navigate = useNavigate();
  const register = () => {
    axios
      .post("http://localhost:8080/register", {
        username: usernameReg,
        password: passwordReg,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="flex justify-center items-center font-press-start text-purple-600 text-5xl mt-24">
        Register
      </h1>
      <div className="text-purple-700 text-2xl font-press-start mb-24 mt-24">
        Create your account
      </div>
      <div class="w-full max-w-xs">
        <form
          // onSubmit={handleSubmit}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
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
              // value={usernameReg}
              onChange={(e) => setUsernameReg(e.target.value)}
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
              // value={passwordReg}
              onChange={(e) => setPasswordReg(e.target.value)}
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={register}
              // disabled={!validateForm()}
            >
              Create Account
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2022 Narshe Mines Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}
