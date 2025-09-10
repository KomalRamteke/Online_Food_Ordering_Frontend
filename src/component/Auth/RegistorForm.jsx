import {
  TextField,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../State/Authentication/Action";
import { useDispatch } from "react-redux";
export default function RegistorForm() {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "Role_Customer",
  };
  const dispatch=useDispatch();
  const handleSubmit = (values) => {
    console.log(values); // you can handle login here
    dispatch(registerUser({userData:values,navigate}))
  };
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-sm p-5 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <Typography variant="h5" className="mb-6 text-center">
        Register
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <Field name="fullname">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Full Name"
                  fullWidth
                  variant="outlined"
                />
              )}
            </Field>
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

            <FormControl fullWidth>
              <InputLabel id="role-simple-select-label">Role</InputLabel>

              <Select
                labelId="role-simple-select-label"
                id="role-simple-select"
                //value={role}
                label="Role"
                //onChange={handleChange}
              >
                <MenuItem value={"Role_Customer"}>Customer</MenuItem>
                <MenuItem value={"Role_Restaurant_Owner"}>
                  Restaurant Owner
                </MenuItem>
              </Select>
            </FormControl>

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant="body2" align="center" sm={{ mt: 3 }}>
        If you have Account Already ?
        <Button size="small" onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  );
}
