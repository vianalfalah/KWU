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
import { connect } from "react-redux";

const initialValuesLogin = {
  email: "",
  password: "",
};
const initialValuesRegis = {
  fullname: "",
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
  fullname: Yup.string()
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

function Landing(props, state) {
  const { login } = props;
  const history = useHistory();
  const [formlogin, setLogin] = useState(true);
  const [formregis, setRegis] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

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
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitLogin = () => {
    login({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <Card className="container">
      {formlogin === true && (
        <Formik
          initialValues={initialValuesLogin}
          validationSchema={loginSchema}
          // onSubmit={() => onSubmitLogin}
          onSubmit={() => history.push("/home")}
        >
          {(formik) => (
            <div className="forms-container">
              <div className="signin-signup">
                <Form action="#" className="sign-in-form">
                  <h2 className="title">Log in</h2>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    fullWidth
                    // value={formData.email}
                    // onChange={(e) => handleChange(e)}
                    value={formik.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />

                  <TextField
                    id="standard-basic"
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    // value={formData.password}
                    // onChange={(e) => handleChange(e)}
                    value={formik.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />

                  {/* <button type="submit" className="btn" onClick={onSubmitLogin}>
                    Sign In
                  </button> */}
                  <button type="submit" className="btn">
                    Submit
                  </button>
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
          onSubmit={() => history.push("/home")}
        >
          {(formik) => (
            <div className="forms-container">
              <div className="signin-signup">
                <Form action="#" className="sign-up-form">
                  <h2 className="title">Join Here</h2>
                  <TextField
                    id="standard-basic"
                    label="Fullname"
                    name="fullname"
                    fullWidth={true}
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.fullname && Boolean(formik.errors.fullname)
                    }
                    helperText={
                      formik.touched.fullname && formik.errors.fullname
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />

                  <TextField
                    id="standard-basic"
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    fullWidth
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                  />
                  <button type="submit" className="btn">
                    Join Now
                  </button>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={onSwitchRegis}
            >
              Join Now
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
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
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(action.login(data)),
});

// export default connect(mapStateToProps, mapDispatchToProps)(Landing);
export default Landing;
