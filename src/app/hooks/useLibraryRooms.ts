import { room } from "../types";
import { useEffect, useState } from "react";

export const useLibraryRooms = () => {
  const [roomData, setRoomData] = useState<room[]>([]);

  const getRoomData = async () => {
    try {
      const res = await fetch(`/api/scrape/wells`);
      const libraryDataRes = await res.json();
      setRoomData(libraryDataRes.data);
    } catch (error) {
      console.error("Failed to fetch room reservation data: ", error);
    }
  };

  useEffect(() => {
    getRoomData();
  }, []);

  return { roomData };
};
