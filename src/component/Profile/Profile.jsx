import { useState } from "react";
import ProfileNavigation from "./ProfileNavigation";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import Address from "./Address";
import Favorites from "./Favorites";
import Orders from "./Orders";
import Events from "./Events";

export default function Profile() {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="justify-between lg:flex">
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation open={openSideBar} />
      </div>
      <div className="lg:w-[80%]">
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Address" element={<Address />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
}
