import { room } from "@/app/types";

export const RoomCard = ({ room, times }: room) => {
  return (
    <div className="flex flex-col flex-wrap lg:w-full h-1/2 p-4 bg-gradient-to-br from-white/10 to-white/20 rounded-md font-mono space-y-4">
      <h1 className=" flex justify-items-start lg:w-full  space-x-2">
        <p>{room}</p>

        <p>
          {times
            .slice(1, 2)
            .map((room) => (room.reserved == "Available" ? <>✅</> : <>🚫</>))}
        </p>
      </h1>
      {times.slice(1, 6).map((room) => (
        <div key={room.date} className="flex flex-col lg:w-full flex-wrap">
          {room.date != null ? (
            <p
              key={room.date}
              className={`${
                room.reserved == "Available"
                  ? `text-sm ring-2 p-2 rounded-xl ring-green-400
  shadow-[0_0_8px_rgba(52,211,153,0.7),0_0_15px_rgba(16,185,129,0.4)] text-white
  hover:shadow-[0_0_10px_rgba(52,211,153,0.8),0_0_20px_rgba(16,185,129,0.5)]
  transition-all duration-300`
                  : `text-sm ring-2 p-2 rounded-xl ring-red-400
  shadow-[0_0_8px_rgba(248,113,113,0.7),0_0_15px_rgba(220,38,38,0.4)] text-white
  hover:shadow-[0_0_10px_rgba(248,113,113,0.8),0_0_20px_rgba(220,38,38,0.5)]
  transition-all duration-300`
              }`}
            >
              {room.date}
            </p>
          ) : (
            <p>Room not Available</p>
          )}
        </div>
      ))}
    </div>
  );
};
