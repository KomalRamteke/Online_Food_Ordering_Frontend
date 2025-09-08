import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProfileNavigation({ open, handleClose }) {
  const menu = [
    { title: "Orders", icon: <ShoppingBagIcon /> },
    { title: "Favorites", icon: <FavoriteIcon /> },
    { title: "Address", icon: <HomeIcon /> },
    { title: "Payment", icon: <AccountBalanceWalletIcon /> },
    { title: "Notification", icon: <NotificationsActiveIcon /> },
    { title: "Events", icon: <EventIcon /> },
    { title: "Logout", icon: <LogoutIcon /> },
  ];

  const isSmallScreen = useMediaQuery("(max-width:900px)"); // temporary drawer on small screens
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.title.toLowerCase()}`);
    if (isSmallScreen) handleClose(); // close drawer after navigation on small screens
  };

  return (
    <Drawer
      variant={isSmallScreen ? "temporary" : "permanent"}
      onClose={handleClose}
      anchor="left"
      open={isSmallScreen ? open : true} // boolean
      sx={{ position: "sticky" }}
    >
      <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-start text-xl gap-8 pt-16">
        {menu.map((item, key) => (
          <div key={key}>
            <div
              onClick={() => handleNavigate(item)}
              className="flex items-center p-2 space-x-5 rounded-lg cursor-pointer hover:bg-gray-100"
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
            {key !== menu.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </Drawer>
  );
}
