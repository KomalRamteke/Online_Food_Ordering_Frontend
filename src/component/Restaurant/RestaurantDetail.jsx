import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useState } from "react";
import MenuCard from "./MenuCard";

export default function RestaurantDetail() {
  const [foodType, setFoodType] = useState("all");
  const [foodCategory, setFoodCategory] = useState("pizza");

  const categories = ["pizza", "burger", "sandwich", "noodles"];

  const foodTypes = [
    { label: "All", value: "all" },
    { label: "Veg Only", value: "veg" },
    { label: "Nonveg Only", value: "nonveg" },
    { label: "Seasonal", value: "seasonal" },
  ];

  // Example menu data
  const menu = [
    { id: 1, name: "Margherita Pizza", type: "veg", category: "pizza" },
    { id: 2, name: "Chicken Burger", type: "nonveg", category: "burger" },
  ];

  const handleFilter = (e) => {
    console.log(e.target.name, e.target.value);
    if (e.target.name === "food_type") {
      setFoodType(e.target.value);
    } else if (e.target.name === "food_category") {
      setFoodCategory(e.target.value);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex justify-center mt-4 mb-3">
        <section>
          <h3>Home / India / Indian Fast Food</h3>
        </section>
      </div>

      {/* Images Section */}
      <div className="flex justify-center mt-4">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          style={{ maxWidth: "80rem" }}
        >
          <Grid item xs={12}>
            <img
              src="https://th.bing.com/th/id/OIP.IIoCyJhUus5uPeGkLCC_GAHaE8?w=263&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
              alt=""
              className="w-[30rem] h-[40vh] mb-3"
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <img
              src="https://th.bing.com/th/id/OIP.3qlGSWrmRRugXJGmyStlAgHaE7?w=244&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
              alt=""
              className="w-[30rem] h-[40vh] mb-3 object-cover"
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <img
              src="https://th.bing.com/th/id/OIP.tGrJIKDap-9EcShwhcOuNAHaEK?w=290&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
              alt=""
              className="w-[30rem] h-[40vh] mb-3 object-cover"
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <img
              src="https://th.bing.com/th/id/OIP.idK0eHo346-rHZng--DnSQHaE8?w=259&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
              alt=""
              className="w-[30rem] h-[40vh] mb-3 object-cover"
            />
          </Grid>
        </Grid>
      </div>

      {/* Restaurant Info */}
      <section className="mx-40">
        <div className="pt-3 pb-5">
          <h1 className="text-2xl font-semibold">Indian Fast Food</h1>
          <div className="flex items-center gap-2">
            <LocationOnIcon />
            <span>Amravati, Maharashtra</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarTodayIcon />
            <span>Mon-Sat</span>
          </div>
          <p className="mt-3">
            Indian fast food is a vibrant mix of spicy, tangy, and flavorful
            dishes loved across the country. From street-side chaats and crispy
            samosas to vada pav and dosas, it offers quick yet satisfying bites.
            It reflects India’s rich culinary diversity, bringing regional
            tastes together in an affordable, delicious way.
          </p>
        </div>
      </section>

      <Divider />

      {/* Filters + Menu */}
      <section className="relative pt-2 mx-40 lg:flex">
        {/* Sidebar Filter */}
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="p-5 space-y-5 shadow-md box lg:sticky top-28">
            {/* Food Type Filter */}
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <Divider />

            {/* Food Category Filter */}
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_category"
                  value={foodCategory}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item) => (
            <MenuCard key={item.id} data={item} />
          ))}
        </div>
      </section>
    </>
  );
}
