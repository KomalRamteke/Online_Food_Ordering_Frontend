import EventCard from "./EventCard";

export default function Events() {
  return (
    <div className="flex flex-col items-center min-h-screen space-y-5 bg-gray-100 py-7">
      <div className="flex items-center justify-center space-x-2 space-y-2">
        {[1, 1, 1].map((item, key) => (
          <EventCard key={key} />
        ))}
      </div>
    </div>
  );
}
