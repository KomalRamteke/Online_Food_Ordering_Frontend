import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DarkTheme } from "./component/Navbar/DarkTheme";
import Home from "./component/Home/Home";
import RestaurantDetail from "./component/Restaurant/RestaurantDetail";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import CustomerRouter from "./component/Routers/CustomerRouter";

function App() {
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
