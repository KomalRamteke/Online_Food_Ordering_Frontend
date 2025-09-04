import React from "react";
import './home.css';
import MultiItemCarousal from "./MultiItemCarousal";
import Restaurantcard from "../Restaurant/Restaurantcard";
export default function Home() {
    const restaurant=[1,0,1,1,1,,0];
  return (
    <div>
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
            <div className="w-[50vw] z-10 text-center">
            <p className="text-2xl lg:text-6xl font-bold z-10 py-4 text-white">
                Komal Food
            </p>
            <p className="z-10 text-white text-center font-semibold lg:text-xl">
                Taste the convenience: Food, Fast and Delivered
            </p>
            </div>
            <div className="cover absolute top-0 left-0 right-0">
            </div>
            <div className="fadeout">
            
            </div>
        </section>

        <section className="p-10 lg:py-10 lg:px-10">
        <p className="text-2xl font-semibold text-center py-3 py-10"> Top Meals</p>
        <MultiItemCarousal />
        </section>
        <section className="px-5 lg:px-20 pt-5" >
        <h1 className="text-2xl font-semibold text-center py-3 pb-5 ">Order from our Handpicked Favorites</h1>
        <div className="flex flex-wrap item-center justify-around gap-5">{
            restaurant.map((item)=><Restaurantcard />)
        }</div>
        </section>
        
    </div>
  );
}