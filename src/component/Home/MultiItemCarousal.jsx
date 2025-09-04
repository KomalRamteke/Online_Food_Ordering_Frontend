

import Slider from "react-slick";
import { topmeals } from "./TopMeal";
import { CourasalItem } from "./CourasalItem";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

export default function MultiItemCarousal() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows :false
  };
  return (
    <div className="w-full ">
  <Slider {...settings}>
    {topmeals.map((item) => (
      <CourasalItem key={item.id} image={item.image} title={item.title} />
    ))}
  </Slider>
</div>

   
  )
}
