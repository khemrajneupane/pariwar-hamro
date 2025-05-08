"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ButtonLoader from "../layout/ButtonLoader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { data } = useSession();

  const router = useRouter();
  const submiHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Login successful");
      router.replace("/");
    }
  };
  const googleLogin = async () => await signIn("google");
  /*if (data) {
    router.replace("/");
  }*/
  return (
    <div className="row wrapper justify-content-center">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <form
          className="shadow-lg rounded-3 p-4 p-sm-5 bg-white"
          onSubmit={submiHandler}
        >
          <h1 className="mb-4 text-center">Login</h1>

          <div className="mb-4">
            <label className="form-label fw-semibold" htmlFor="email_field">
              Email
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control py-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold" htmlFor="password_field">
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control py-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <Link href="/password/forgot" className="text-decoration-none">
              Forgot Password?
            </Link>
          </div>

          <button
            id="login_button"
            type="submit"
            className="btn btn-primary btn-lg w-100 py-2 mb-3"
            disabled={loading}
          >
            {loading ? <ButtonLoader /> : "LOGIN"}
          </button>

          <div className="d-flex justify-content-center align-items-center mb-4">
            <span className="text-muted">Don't have an account?</span>
            <Link href="/register" className="ms-2 text-decoration-none">
              Register Here
            </Link>
          </div>

          <div className="text-center">
            <p className="text-muted mb-3">Or login with</p>
            <button
              onClick={() => googleLogin()}
              type="button"
              className="btn btn-outline-danger rounded-circle me-2"
            >
              <i className="fab fa-google"></i>
            </button>
            <button
              type="button"
              disabled
              className="btn btn-outline-primary rounded-circle me-2"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              type="button"
              disabled
              className="btn btn-outline-dark rounded-circle"
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
