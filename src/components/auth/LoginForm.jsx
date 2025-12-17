"use client";
import Link from "next/link";
import { SocialButtons } from "./SocialButton";
import { useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...form });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <SocialButtons />

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link href={"/register"} className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
