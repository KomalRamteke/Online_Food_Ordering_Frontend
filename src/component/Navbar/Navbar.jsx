import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Person } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box className="sticky top-0 z-50 flex items-center justify-between px-8 bg-purple-800 lg:px-20">
      {/* Logo */}
      <h1 className="text-2xl font-semibold cursor-pointer logo text-black-800">
        Komal Food8
      </h1>

      {/* Right side icons */}
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="">
          {false ? (
            <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>K</Avatar>
          ) : (
            <IconButton onClick={() => navigate("account/login")}>
              <Person />
            </IconButton>
          )}
        </div>
        <div className="">
          <IconButton>
            <Badge color="success">
              <ShoppingCartIcon sx={{ bgcolor: "white", color: pink.A400 }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
}
