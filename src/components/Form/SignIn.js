import React from "react";
import { useForm } from "react-hook-form";

function SignIn() {
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
      <h2 className="text-2xl font-bold mb-8">Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-gray-600 font-medium mb-2"
          >
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
            <span className="text-xs text-red-500">This field is required</span>
          ) : (
            <span className="text-xs text-white">&nbsp;</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 font-medium mb-2"
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
          className="w-full bg-indigo-500 text-white font-medium py-4 rounded-lg transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
