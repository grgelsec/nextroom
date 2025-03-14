import { room } from "@/app/types";
export const RoomCard = ({ availability, date, room }: room) => {
  return (
    <div className="flex flex-col flex-wrap lg:w-full h-1/2 ring p-2 bg-white/15 rounded-md font-mono space-y-4">
      <h1 className=" flex justify-items-start lg:w-full">
        {room} - {availability}
      </h1>
      <div className="flex lg:w-full">
        <h2 className="w-full text-sm">Available Times</h2>
      </div>
    </div>
  );
};
