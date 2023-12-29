import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Style from "../style/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

function Username() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post("YOUR_SERVER_LOGIN_ENDPOINT", values);
        // Handle the response, e.g., store tokens in local storage or Redux state
        console.log(response.data);
      } catch (error) {
        // Handle login error
        console.error("Login failed:", error.response.data);
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
                type="password"
                name="password"
                className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none my-4"
                {...formik.getFieldProps("password")}
                placeholder="Password"
              />
              <button
                className="border w-3/4 bg-[#3f51b5] py-4 rounded-lg text-red-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member{" "}
                <Link to="/register" className="text-red-500">
                  Register now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Username;
