import { Card, Chip, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function RestaurantCard() {
  const isOpen = true;
  const isFavorite = true;

  return (
    <Card className="w-[18rem]">
      <div
        className={`${
          isOpen ? "cursor-pointer" : "cursor-not-allowed"
        } relative`}
      >
        <img
          className="w-full h-[10rem] rounded object-cover"
          src="https://www.rd.com/wp-content/uploads/2016/03/aol-food-perfect-sandwich-ft.jpg"
          alt="Restaurant"
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={isOpen ? "success" : "error"}
          label={isOpen ? "Open" : "Closed"}
        />
      </div>

      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-2">
          <p className="font-semibold text-sm">Indian Fast Food</p>
          <p className="text-sm">
            Craving it all? Dive into our global world....
          </p>
          <IconButton>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
