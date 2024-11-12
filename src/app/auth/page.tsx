"use client";

import { useState } from "react";
import LoginForm from "./components/LoginForm";
import { AuthFormType } from "./types";
import RegisterForm from "./components/RegisterForm";

export default function AuthPage() {
  const [currentForm, setCurrentForm] = useState<AuthFormType>("login");

  const toggleCurrentForm = () => {
    setCurrentForm((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {currentForm === "login" ? (
        <LoginForm toggleCurrentForm={toggleCurrentForm} />
      ) : (
        <RegisterForm toggleCurrentForm={toggleCurrentForm} />
      )}
    </div>
  );
}
