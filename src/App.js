import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { DarkTheme } from "./component/Navbar/DarkTheme";
import CustomerRouter from "./component/Routers/CustomerRouter";
import { useEffect } from "react";
import { getUser } from "./component/State/Authentication/Action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");
 // const { auth } = useSelector((store) => store.auth);
  // useEffect(() => {
  //   dispatch(getUser(auth.jwt || jwt));
  // }, [auth.jwt]);
const { auth } = useSelector((store) => store.auth) || {};

useEffect(() => {
  dispatch(getUser((auth && auth.jwt) || jwt));
}, [auth && auth.jwt]);

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      {/*  <Navbar />
        <Profile/>
       <Home /> 
       <RestaurantDetail />
       <Cart /> */}
      <CustomerRouter />
    </ThemeProvider>
  );
}

export default App;
