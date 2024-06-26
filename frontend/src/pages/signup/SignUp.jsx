import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChipChip</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">
                Full Name:
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username:</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Password:</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">
                Confirm password:
              </span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Confirm your password"
            />
          </div>

          {/* Gender checkbox */}
          <GenderCheckbox />

          <div className="flex items-center justify-center">
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
            >
              Already had an account? Login now!
            </a>
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
