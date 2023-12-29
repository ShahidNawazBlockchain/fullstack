import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Style from "../style/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

function Register() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      fullname: "",
      password: "",
      // Remove avatar and coverImage from initialValues
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "YOUR_SERVER_REGISTER_ENDPOINT",
          values // No need to use FormData for image fields
        );

        // Handle the response, e.g., show a success message, redirect, etc.
        console.log(response.data);
      } catch (error) {
        // Handle registration error
        console.error("Registration failed:", error.response.data);
      }
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster
        position="top-right"
        className="font-extrabold"
        reverseOrder={false}
      />
      <div className="flex justify-center items-center h-screen">
        <div className={Style.glass}>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center py-4">
              <input
                type="text"
                name="username"
                className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none my-4"
                {...formik.getFieldProps("username")}
                placeholder="Username"
              />
              <input
                type="email"
                name="email"
                className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none my-4"
                {...formik.getFieldProps("email")}
                placeholder="Email"
              />
              <input
                type="text"
                name="fullname"
                className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none my-4"
                {...formik.getFieldProps("fullname")}
                placeholder="Full Name"
              />
              <input
                type="password"
                name="password"
                className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none my-4"
                {...formik.getFieldProps("password")}
                placeholder="Password"
              />
              {/* Remove avatar input and preview */}
              <button
                className="border w-3/4 bg-[#3f51b5] py-4 rounded-lg text-red-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]"
                type="submit"
              >
                Register
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Already a Member?{" "}
                <Link to="/" className="text-red-500">
                  Login now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
