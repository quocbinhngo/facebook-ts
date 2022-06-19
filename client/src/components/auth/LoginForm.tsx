import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import * as Yup from "yup";

import { useAppDispatch } from "../../app/hooks";
import { userActions } from "../../features/user/userSlice";
import userService from "../../services/user.service";
import AuthInput from "../inputs/AuthInput";

export interface LoginFormProps {
  setShowRegisterForm: Dispatch<SetStateAction<boolean>>;
}

const loginInputInitialState = {
  email: "",
  password: "",
};

export default function LoginForm({ setShowRegisterForm }: LoginFormProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState(loginInputInitialState);
  const [loginIsLoading, setLoginIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(undefined);
  const { email, password } = loginInput;

  const onLoginInputChange = (e: any) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
    console.log(loginInput);
  };

  const onLoginFormSubmit = async (e: any) => {
    try {
      setLoginIsLoading(true);
      const data = await userService.logIn({ email, password });

      setTimeout(() => {
        dispatch(userActions.login(data));
        Cookies.set("user", JSON.stringify(data));
        navigate("/");
      }, 2000);
    } catch (error: any) {
      setTimeout(() => {
        setLoginIsLoading(false);
        setLoginError(error.response.data.message);
      }, 2000);
    }
  };

  const loginInputValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required")
      .email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be between 8 and 40 characters")
      .max(40, "Password must be between 8 and 40 characters"),
  });

  return (
    <div className="bg-gray-100 h-3/4 pb-4">
      <div className="max-w-2xl mx-auto">
        {/* Login header */}
        <div className="mx-auto w-80 mb-4">
          <img
            className="w-72 sm:w-80 object-cover object-center"
            src="./assets/svg/facebook-text.svg"
            alt="logo"
          />
          <p className="text-xl text-center">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Login form */}
        <div className="bg-white mx-auto w-80 sm:w-96 p-4 rounded-lg drop-shadow-md mb-4">
          <Formik
            enableReinitialize
            initialValues={{ email, password }}
            validationSchema={loginInputValidation}
            onSubmit={onLoginFormSubmit}
          >
            {(formik) => (
              <Form>
                <div className="flex flex-col space-y-3 mb-4">
                  <AuthInput
                    type="text"
                    name="email"
                    placeholder="Email address or phone number"
                    value={email}
                    onChange={onLoginInputChange}
                  />
                  <AuthInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onLoginInputChange}
                  />
                  <button
                    className="rounded-lg bg-primary-blue py-3 font-semibold text-white hover:bg-blue-600"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="flex mb-4">
            <Link
              to="/"
              className="text-center inline-block mx-auto text-sm text-blue-500 hover:text-blue-600"
            >
              Forgotten password ?
            </Link>
            <DotLoader color="#1876f2" loading={loginIsLoading} size={30} />
          </div>
          {loginError && (
            <div className="mb-4">
              <p className="text-center text-sm text-red-600">{loginError}</p>
            </div>
          )}
          <hr className="border-t-[1px] solid border-gray-300 mb-8 w-full" />
          <div className=" flex mb-6">
            <button
              className="rounded-lg bg-green-500 py-2 w-56 font-semibold text-white mx-auto hover:bg-green-600"
              onClick={() => setShowRegisterForm(true)}
            >
              Create Account
            </button>
          </div>
        </div>

        <div className="flex">
          <Link to="/" className="mx-auto">
            <b>Create a Page </b> for a ceblerity
          </Link>
        </div>
      </div>
    </div>
  );
}
