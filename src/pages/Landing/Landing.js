import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  TextField,
} from "@material-ui/core";
import "./Landing.scss";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import * as action from "./../../redux/action";
import { connect, useSelector } from "react-redux";
import LOGIN from "../../utils/images/login.svg";
import REGIS from "../../utils/images/regis.svg";

const initialValuesLogin = {
  email: "",
  password: "",
};
const initialValuesRegis = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const loginSchema = Yup.object({
  email: Yup.string()
    .email("Use the correct email format")
    .required("Fill in your email here"),
  password: Yup.string()
    .min(8, "Minimum password length is 8")
    .required("Password is required"),
});
const regisSchema = Yup.object({
  fullName: Yup.string()
    .min(8, "Your name must be minimal 8 character")
    .required("Please fill in your name"),
  email: Yup.string()
    .email("Please use the correct email format")
    .required("Please fill in your email"),
  password: Yup.string()
    .min(8, "Minimum password length is 8")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Password does not match"),
});

const isLogin = localStorage.getItem("token");

function Landing(props) {
  const { login, register } = props;
  const history = useHistory();
  const [formlogin, setLogin] = useState(true);
  const [formregis, setRegis] = useState(false);

  const onSwitchRegis = () => {
    setLogin(false);
    setRegis(true);
    document.querySelector(".container").classList.add("sign-up-mode");
  };
  const onSwitchLogin = () => {
    setLogin(true);
    setRegis(false);
    document.querySelector(".container").classList.remove("sign-up-mode");
  };

  const onSubmitLogin = (values) => {
    login({
      email: values.email,
      password: values.password,
    });
  };

  const onSubmitRegis = (values) => {
    register({
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    });
  };

  console.log(isLogin);

  return (
    <>
      {isLogin && <Redirect to="/home" />}
      <Card className="container">
        {formlogin === true && (
          <Formik
            initialValues={initialValuesLogin}
            validationSchema={loginSchema}
            onSubmit={onSubmitLogin}
          >
            {({ errors, touched, values, handleChange }) => (
              <div className="forms-container">
                <div className="signin-signup">
                  <Form action="#" className="sign-in-form">
                    <h2 className="title">Log in</h2>
                    <TextField
                      id="standard-basic"
                      label="Email"
                      name="email"
                      fullWidth
                      value={values.email}
                      onChange={handleChange.bind(this)}
                      // value={formik.email}
                      // onChange={formik.handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />

                    <TextField
                      id="standard-basic"
                      label="Password"
                      type="password"
                      name="password"
                      fullWidth
                      value={values.password}
                      onChange={handleChange.bind(this)}
                      // value={formik.password}
                      // onChange={formik.handleChange}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />

                    <button type="submit" className="btn">
                      Sign In
                    </button>
                    {/* <button type="submit" className="btn">
                    Submit
                  </button> */}
                    <p className="social-text">
                      Or Sign in with social platforms
                    </p>
                    {/* <div className="social-media">
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div> */}
                  </Form>
                </div>
              </div>
            )}
          </Formik>
        )}

        {formregis === true && (
          <Formik
            initialValues={initialValuesRegis}
            validationSchema={regisSchema}
            onSubmit={onSubmitRegis}
          >
            {({ errors, touched, handleChange, values }) => (
              <div className="forms-container">
                <div className="signin-signup">
                  <Form action="#" className="sign-up-form">
                    <h2 className="title">Join Here</h2>
                    <TextField
                      id="standard-basic"
                      label="Fullname"
                      name="fullName"
                      fullWidth={true}
                      value={values.fullName}
                      onChange={handleChange.bind(this)}
                      error={touched.fullName && Boolean(errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                    />
                    <TextField
                      id="standard-basic"
                      label="Email"
                      name="email"
                      fullWidth
                      value={values.email}
                      onChange={handleChange.bind(this)}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />

                    <TextField
                      id="standard-basic"
                      label="Password"
                      type="password"
                      name="password"
                      fullWidth
                      value={values.password}
                      onChange={handleChange.bind(this)}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                    <TextField
                      id="standard-basic"
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      fullWidth
                      value={values.confirmPassword}
                      onChange={handleChange.bind(this)}
                      error={
                        touched.confirmPassword &&
                        Boolean(errors.confirmPassword)
                      }
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
                    />
                    <button type="submit" className="btn">
                      Join Now
                    </button>
                    {/* <button type="submit" className="btn">
                        Join Now
                      </button> */}
                    <p className="social-text">
                      Or Sign up with social platforms
                    </p>
                    {/* <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
                  </Form>
                </div>
              </div>
            )}
          </Formik>
        )}

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Bebaskan ekspresimu, harimu, dan hobbymu dengan cara sendiri.
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={onSwitchRegis}
              >
                Join Now
              </button>
            </div>
            <img src={LOGIN} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={onSwitchLogin}
              >
                Log In
              </button>
            </div>
            <img src={REGIS} className="image" alt="" />
          </div>
        </div>
      </Card>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(action.login(data)),
  register: (data) => dispatch(action.register(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
// export default Landing;
