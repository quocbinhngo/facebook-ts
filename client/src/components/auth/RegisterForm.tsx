import { Form, Formik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import userService from "../../services/user.service";
import AuthInput from "../inputs/AuthInput";
import DateOfBirthSelect from "./DateOfBirthSelect";
import GenderSelect from "./GenderSelect";

export interface RegisterFormProps {
  setShowRegisterForm: Dispatch<SetStateAction<boolean>>;
}

const registerInputInitalState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthYear: new Date().getFullYear(),
  birthMonth: new Date().getMonth(),
  birthDay: new Date().getDay(),
  gender: "",
};

export default function RegisterForm({
  setShowRegisterForm,
}: RegisterFormProps) {
  const [registerInput, setRegisterInput] = useState(registerInputInitalState);
  const [birthDateError, setBirthDateError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [registerSuccess, setRegisterSucess] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [registerIsLoading, setRegisterIsLoading] = useState(false);

  const {
    firstName,
    lastName,
    email,
    password,
    birthDay,
    birthMonth,
    birthYear,
    gender,
  } = registerInput;

  const registerInputValidation = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .min(3, "First name must be between 3 and 30 characters")
      .max(30, "First name must be between 3 and 30 characters"),
    lastName: Yup.string()
      .required("First name is required")
      .min(3, "First name must be between 3 and 30 characters")
      .max(30, "First name must be between 3 and 30 characters"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be between 8 and 40 characters")
      .max(40, "Password must be between 8 and 40 characters"),
  });

  const onRegisterInputChange = (e: any) => {
    const { name, value } = e.target;
    setRegisterInput({ ...registerInput, [name]: value });
  };

  const onRegisterFormSubmit = async () => {
    setGenderError("");
    setBirthDateError("");

    // Check valid gender
    if (!gender) {
      setGenderError("Gender is required");
    }

    // Check invalid date
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay).getTime();
    const curDate = new Date().getTime();

    if (birthDate > curDate) {
      setBirthDateError("Invalid birth date");
    }

    if (genderError || birthDateError) {
      return;
    }

    try {
      setRegisterIsLoading(true);
      setRegisterError("");
      setRegisterSucess("");

      await userService.register({
        firstName,
        lastName,
        email,
        password,
        birthYear: +birthYear,
        birthMonth: +birthMonth,
        birthDay: +birthDate,
        gender,
      });

      setTimeout(() => {
        setRegisterIsLoading(false);
        setRegisterSucess(
          "We've sent you an activate email. Please activate your account and login again"
        );
      }, 2000);
    } catch (error: any) {
      setTimeout(() => {
        setRegisterIsLoading(false);
        setRegisterError(error.message);
        console.log(error);
      }, 2000);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-blur z-50 flex p-4">
      <div className="mx-auto w-96 bg-white relative px-4 py-3 space-y-2 rounded-lg overflow-y-scroll">
        {/* Form header */}
        <div>
          <AiOutlineClose
            className="absolute top-4 right-4 text-gray-500 cursor-pointer"
            size={24}
            onClick={() => setShowRegisterForm(false)}
          />
          <h2 className="text-3xl font-bold mb-3">Sign Up</h2>
          <span>it's quick and easy</span>
        </div>
        <div className="border-t-[1px] solid border-gray-300 w-full" />
        <div>
          <Formik
            enableReinitialize
            initialValues={{ firstName, lastName, email, password }}
            onSubmit={onRegisterFormSubmit}
            validationSchema={registerInputValidation}
          >
            {(formik) => (
              <Form>
                {/* Input text */}
                <div className="space-y-3 mb-6">
                  <AuthInput
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First name"
                    onChange={onRegisterInputChange}
                  />
                  <AuthInput
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Last name"
                    onChange={onRegisterInputChange}
                  />
                  <AuthInput
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email address"
                    onChange={onRegisterInputChange}
                  />
                  <AuthInput
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={onRegisterInputChange}
                  />
                  <DateOfBirthSelect
                    birthDay={birthDay}
                    birthMonth={birthMonth}
                    birthYear={birthYear}
                    onChange={onRegisterInputChange}
                    birthDateError={birthDateError}
                  />
                  <GenderSelect
                    onChange={onRegisterInputChange}
                    value={gender}
                    genderError={genderError}
                  />
                  <p className="text-gray-500 text-[10px]">
                    By clicking Sign Up, you agree to our
                    <Link className="text-blue-500" to="/">
                      Terms, Data Policy
                    </Link>
                    and
                    <Link className="text-blue-500" to="/">
                      Cookie Policy.
                    </Link>
                    You may receive SMS notifications from us and can opt out at
                    any time.
                  </p>
                </div>

                {/* Sign up button message */}
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <button
                      className="rounded-lg bg-green-500 py-2 w-56 font-semibold text-white hover:bg-green-600"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                  {!registerIsLoading && (
                    <div>
                      {registerError && (
                        <p className="text-sm text-red-600 text-center">
                          {registerError}
                        </p>
                      )}
                      {registerSuccess && (
                        <p className="text-sm text-green-500 text-center">
                          {registerSuccess}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
