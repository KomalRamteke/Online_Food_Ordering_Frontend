import React from "react";
import './home.css';
import MultiItemCarousal from "./MultiItemCarousal";
import Restaurantcard from "../Restaurant/Restaurantcard";
import Auth from "../Auth/Auth";
export default function Home() {
    const restaurant=[1,0,1,1,1,1,0];
  return (
    <div>
      <section className="relative flex flex-col items-center justify-center banner -z-50">
            <div className="w-[50vw] z-10 text-center">
            <p className="z-10 py-4 text-2xl font-bold text-white lg:text-6xl">
                Komal Food
            </p>
            <p className="z-10 font-semibold text-center text-white lg:text-xl">
                Taste the convenience: Food, Fast and Delivered
            </p>
            </div>
            <div className="absolute top-0 left-0 right-0 cover">
            </div>
            <div className="fadeout">
            
            </div>
        </section>

        <section className="p-10 lg:py-10 lg:px-10">
        <p className="py-3 py-10 text-2xl font-semibold text-center"> Top Meals</p>
        <MultiItemCarousal />
        </section>
        <section className="px-5 pt-5 lg:px-20" >
        <h1 className="py-3 pb-5 text-2xl font-semibold text-center ">Order from our Handpicked Favorites</h1>
        <div className="flex flex-wrap justify-around gap-5 item-center">{
            restaurant.map((item)=><Restaurantcard />)
        }</div>
        </section>
        <Auth />
    </div>
  );
}