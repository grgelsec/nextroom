import { room } from "../types";
import { useEffect, useState } from "react";

const useLibraryRooms = () => {
  const [roomData, setRoomData] = useState<room[]>([]);

  const getRoomData = async () => {
    try {
      const res = await fetch(`/api/scrape`);
      const roomDataResponse = await res.json();
      setRoomData(roomDataResponse.data);
    } catch (error) {
      console.error("Failed to fetch room reservation data: ", error);
    }
  };

  useEffect(() => {
    getRoomData();
  }, []);

  return { roomData };
};

export default useLibraryRooms;
