import { Chip, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function CartItem() {
  return (
    <div className="px-5">
      <div className="flex items-center lg:space-x-5">
        <img
          src="https://th.bing.com/th/id/OIP.EI1gkZ-q5V3bXxTZWOlpPQHaLH?w=129&h=193&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
          alt="Burger"
          className="w-[5rem] h-[5rem] object-cover rounded"
        />
        <div className="flex flex-col space-y-2">
          <p className="font-medium">Burger</p>
          <p className="text-sm text-gray-600">₹5453</p>

          <div className="flex items-center space-x-2">
            <IconButton size="small">
              <RemoveCircleOutlineIcon />
            </IconButton>

            <div className="flex items-center justify-center w-6 h-6 text-sm font-semibold">
              {5}
            </div>

            <IconButton size="small">
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
        </div>
        
      </div>
      <div className="pt-3 space-x-2">
        {[1,1].map((item,key)=>(<Chip label={"bread"} key={key}/>))}
        </div>
    </div>
  );
}
