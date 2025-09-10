import { TextField, Typography, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { loginUser } from "../State/Authentication/Action";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch=useDispatch();
  
  const handleSubmit = (values) => {
    console.log(values); // you can handle login here
    dispatch(loginUser({userData:values,navigate}))
  };
  
  
  return (
    <div className="w-full max-w-sm p-5 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <Typography variant="h5" className="mb-6 text-center">
        Login
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <Field name="email">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  variant="outlined"
                />
              )}
            </Field>

            {/* Password Field */}
            <Field name="password">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                />
              )}
            </Field>

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant="body2" align="center" sm={{ mt: 3 }}>
        Dont have Account ?
        <Button size="small" onClick={() => navigate("/account/register")}>
          Register
        </Button>
      </Typography>
    </div>
  );
}
