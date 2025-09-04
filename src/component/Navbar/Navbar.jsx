import { Avatar, Badge, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Navbar() {
  return (
    <div className="px-8 z-100 bg-purple-600 lg:px-20 flex justify-between items-center">
      {/* Logo */}
      <h1 className="logo font-semibold text-black-800 text-2xl cursor-pointer">
        Komal Food
      </h1>

      {/* Right side icons */}
      <div className="flex items-center space-x-2 lg:space-x-10">
            <div className="">
            <IconButton>
                <SearchIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
            </div>  
            <div className="">
              <Avatar sx={{bgcolor:"white",color:pink.A400}}>K</Avatar>
            </div>
             <div className="">
               <IconButton>
                <Badge color="success" >
                    <ShoppingCartIcon sx={{bgcolor:"white",color:pink.A400}} />
                </Badge>
              </IconButton>
              </div>
     
      </div>

    </div>
  );
}
