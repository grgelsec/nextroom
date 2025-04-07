import { use } from "react";
import { RoomCard } from "./roomCard";
import { room } from "@/app/types";

export const WellsRooms = ({ rooms }: { rooms: Promise<room[]> }) => {
  const WellsRoomData: room[] = use(rooms);
  return (
    <>
      {WellsRoomData.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </>
  );
};
