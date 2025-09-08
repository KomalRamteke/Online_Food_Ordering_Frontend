import RestaurantCard from "../Restaurant/Restaurantcard";

export default function Favorites() {
  return (
    <div className="flex flex-col items-center min-h-screen space-y-5 bg-gray-100 py-7">
      <h1 className="py-3 text-xl font-semibold text-center">My Favorites </h1>
      <div className="flex flex-wrap justify-center space-x-3 space-y-2">
        {[1, 1, 1, 1].map((item, key) => (
          <RestaurantCard key={key} />
        ))}
      </div>
    </div>
  );
}
