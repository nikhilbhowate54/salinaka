import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { notification } from "antd";
import axios from "axios";
const Login = () => {
  const navigate=useNavigate()
  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("This field is required"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Pasword must be 8 or more characters"),
  });
  const openNotificationWithIcon = (type, text) => {
    notification[type]({
      message: (
        <div style={{ color: "#52c41a" }}>
          <strong>{text}</strong>
        </div>
      ),
      duartion: 1,
    });
  };
  const {
    errors,
    values,
    touched,
    handleChange,
    handleSubmit,
    getFieldProps,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      // console.log(values);
      const { password, email } = values;
      try {
        const response = await axios.post("http://localhost:3000/api/login", {
          password,
          email,
        });
        console.log(response);
        localStorage.setItem("accessToken", response.data.token);
        if (response) openNotificationWithIcon("success", "Log in");

        setTimeout(() => {
          navigate("/");
        }, 800);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <main className="content">
        <div className="auth-content">
          <div className="auth undefined">
            <div className="auth-main">
              <h3>
                Sign in
                {/* to
                 Salinaka */}
              </h3>
              <br />
              <div className="auth-wrapper">
                <form onSubmit={handleSubmit}>
                  <div className="auth-field">
                    <div className="input-group">
                      <label className="label-input" for="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="input-form undefined"
                        name="email"
                        placeholder="test@example.com"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.email && touched.email ? (
                      <span style={{ color: "red" }}>{errors.email}</span>
                    ) : null}
                  </div>
                  <div className="auth-field">
                    <div className="input-group">
                      <label className="label-input" for="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="input-form undefined"
                        name="password"
                        placeholder="Your Password"
                        value={values.password}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.password && touched.password ? (
                      <span style={{ color: "red" }}>{errors.password}</span>
                    ) : null}
                  </div>
                  <br />
                  <div className="auth-field auth-action">
                    <Link
                      // href="/forgot_password"
                      style={{ textDecoration: "underline" }}
                    >
                      <span>Forgot password?</span>
                    </Link>
                    <button className="button auth-button btnx" type="submit">
                      Sign In&nbsp;
                      <span
                        role="img"
                        aria-label="arrow-right"
                        className="anticon anticon-arrow-right"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="arrow-right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="auth-message">
            <span className="auth-info">
              <strong>Don't have an account?</strong>
            </span>
            <button
              className="button button-small button-border button-border-gray button-icon"
              type="button"
              onClick={()=>navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
