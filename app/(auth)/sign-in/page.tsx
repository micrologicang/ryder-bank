import AuthForm from "@/components/AuthForm";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <div className="flex flex-row min-h-screen justify-center items-center">
        <AuthForm type="sign-in" />
      </div>
    </section>
  );
};

export default SignIn;
