import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import RestaurantDetail from "../Restaurant/RestaurantDetail";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";
import Auth from "../Auth/Auth";

export default function CustomerRouter() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/account/:register" element={<Home />} />
        <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetail />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
      </Routes>
      <Auth />
    </div>
  );
}
