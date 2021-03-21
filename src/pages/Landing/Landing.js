import { useState } from "react";
import { useHistory } from "react-router-dom";
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
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum password length is 8")
    .required("Password is required"),
});
const regisSchema = Yup.object({
  fullname: Yup.string()
    .min(8, "Fullname must be minimal 8 character")
    .required("Fullname is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum password length is 8")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Password does not match"),
});

export default function Landing() {
  const history = useHistory();

  const onSwitchRegis = () => {
    document.querySelector(".container").classList.add("sign-up-mode");
  };
  const onSwitchLogin = () => {
    document.querySelector(".container").classList.remove("sign-up-mode");
  };

  return (
    // <Card classNameName="landing-container">
    //   <CardContent classNameName="landing">
    //     <div
    //       style={formRegis === true ? { marginTop: 200 } : { marginTop: 300 }}
    //     >
    //       <div classNameName="wrap1">
    //         <h1 classNameName="title">show your work to inspire everyone</h1>
    //         <p style={{ color: "white" }}>
    //           Ways Exhibition is a website design creators gather to share their
    //           work with other creators.
    //         </p>
    //       </div>
    //       <Formik
    // initialValues={
    //   formRegis == true ? initialValuesRegis : initialValuesLogin
    // }
    // validationSchema={formRegis == true ? regisSchema : loginSchema}
    // onSubmit={() => history.push("/home")}
    //       >
    //         {(formik) => (
    //           <Form classNameName="form-input">
    //             {formLogin === true && (
    // <FormControl>
    //   <TextField
    //     id="standard-basic"
    //     label="Email"
    //     name="email"
    //     fullWidth
    //     value={formik.values.email}
    //     onChange={formik.handleChange}
    //     error={
    //       formik.touched.email && Boolean(formik.errors.email)
    //     }
    //     helperText={formik.touched.email && formik.errors.email}
    //   />
    //   <TextField
    //     id="standard-basic"
    //     label="Password"
    //     type="password"
    //     name="password"
    //     fullWidth
    //     value={formik.values.password}
    //     onChange={formik.handleChange}
    //     error={
    //       formik.touched.password &&
    //       Boolean(formik.errors.password)
    //     }
    //     helperText={
    //       formik.touched.password && formik.errors.password
    //     }
    //   />
    //   <p classNameName="switch">
    //     Don't have an account ? Klik{" "}
    //     <b classNameName="b" onClick={onSwitchRegis}>
    //       Here
    //     </b>
    //   </p>
    //   <Button
    //     color="primary"
    //     variant="contained"
    //     fullWidth
    //     type="submit"
    //   >
    //     Submit
    //   </Button>
    // </FormControl>
    //             )}

    //             {formRegis === true && (
    //               <Grid item xs={12} sm={12}>
    //                 <Grid
    //                   container
    //                   direction="row"
    //                   justify="center"
    //                   alignItems="center"
    //                 >

    //                 </Grid>
    //               </Grid>
    //             )}
    //           </Form>
    //         )}
    //       </Formik>
    //     </div>
    //   </CardContent>
    // </Card>
    <Card className="container">
      <Formik
        initialValues={initialValuesLogin}
        validationSchema={loginSchema}
        onSubmit={() => history.push("/home")}
      >
        {(formik) => (
          <div className="forms-container">
            <div className="signin-signup">
              <Form action="#" className="sign-in-form">
                <h2 className="title">Sign in</h2>
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
                  helperText={formik.touched.password && formik.errors.password}
                />

                <button type="submit" className="btn">
                  Sign In
                </button>
                <p className="social-text">Or Sign in with social platforms</p>
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

      <Formik
        initialValues={initialValuesRegis}
        validationSchema={regisSchema}
        onSubmit={() => history.push("/home")}
      >
        {(formik) => (
          <div className="forms-container">
            <div className="signin-signup">
              <Form action="#" className="sign-up-form">
                <h2 className="title">Sign up</h2>
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
                  helperText={formik.touched.fullname && formik.errors.fullname}
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
                  helperText={formik.touched.password && formik.errors.password}
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
                  Sing Up
                </button>
                <p className="social-text">Or Sign up with social platforms</p>
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
              Sign up
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
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </Card>
  );
}
