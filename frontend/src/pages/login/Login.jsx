import React from "react";
// import { Link } from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Log In
          <span className="text-blue-500"> ChipChip</span>
        </h1>

        <form className="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username:</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password:</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="flex items-center justify-center">
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
            >
              {"Don't"} have an account? Sign up now!
            </a>
          </div>

          <div className="my-2">
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
