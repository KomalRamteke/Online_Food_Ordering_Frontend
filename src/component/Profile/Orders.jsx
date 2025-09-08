import OrderCard from "./OrderCard";

export default function Orders() {
  return (
    <div className="flex flex-col items-center min-h-screen space-y-5 bg-gray-100 py-7">
      <h1 className="py-3 text-xl font-semibold text-center">My Orders</h1>

      {/* Centered container */}
      <div className="flex flex-col items-center w-full max-w-md space-y-5">
        {[1, 1, 1, 1].map((item, index) => (
          <OrderCard key={index} />
        ))}
      </div>
    </div>
  );
}
