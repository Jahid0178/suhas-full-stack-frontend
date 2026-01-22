import React from "react";
import RegisterForm from "./_components/RegisterForm";

const RegisterPage = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-50">
      <div className="container">
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
