import React from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="m-8">
      <h2 className="text-2xl text-white font-bold mb-8">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", { required: true })}
            className={`block w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-indigo-500 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email ? (
            <span className="text-xs text-red-500  stroke-white">
              This field is required
            </span>
          ) : (
            <span className="text-xs text-white">&nbsp;</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-white font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", { required: true })}
            className={`block w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-indigo-500 ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password ? (
            <span className="text-xs text-red-500">This field is required</span>
          ) : (
            <span className="text-xs text-white">&nbsp;</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-gray-600 text-white font-medium py-4 rounded-lg transition duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
