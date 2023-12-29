import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/s1.jpeg";
import Style from "../style/Username.module.css";
import { Toaster } from "react-hot-toast";
import { usernameValidate } from "../helper/validate";
import { useFormik } from "formik";
function Password() {
  const formik = useFormik({
    initialValues: {
      Username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <Toaster
        position="top-right"
        className="font-extrabold"
        reverseOrder={false}
      ></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={Style.glass}>
          <div className="flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello world</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              explare kjds kjsh
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="flex justify-center py-4">
              <img src={Avatar} className={Style.profile_img} alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center py-4 ">
              <input
                type="text"
                name="username"
                className={Style.textbox}
                {...formik.getFieldProps("username")}
                placeholder="Username"
              />
              <button
                className="border w-3/4 bg-[#3f51b5] py-4 rounded-lg text-red-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]"
                type="submit"
              >
                Lets go
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member
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

export default Password;
