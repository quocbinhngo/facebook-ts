import { useState } from "react";
import AuthFooter from "../components/auth/AuthFooter";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

export default function AuthPage() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <>
      <LoginForm setShowRegisterForm={setShowRegisterForm} />
      <AuthFooter />
      {showRegisterForm && (
        <RegisterForm setShowRegisterForm={setShowRegisterForm} />
      )}
    </>
  );
}
