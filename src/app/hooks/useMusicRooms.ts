import { useEffect, useState } from "react";
import { room } from "../types";

export const useMusicRooms = () => {
  const [musicRooms, setMusicRooms] = useState<room[]>([]);

  const getRoomData = async () => {
    try {
      const res = await fetch("/api/scrape/music");
      const musicResData = await res.json();
      setMusicRooms(musicResData.data);
    } catch (error) {
      console.error("Failed to fetch music library data: ", error);
    }
  };
  useEffect(() => {
    getRoomData();
  }, []);

  return { musicRooms };
};
