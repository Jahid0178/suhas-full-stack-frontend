import React from "react";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-50">
      <div className="container">
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
