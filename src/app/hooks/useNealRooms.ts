import { useEffect, useState } from "react";
import { room } from "../types";

export const useNealRooms = () => {
  const [nealRooms, setNealRooms] = useState<room[]>([]);

  const getNealData = async () => {
    try {
      const res = await fetch("/api/scrape/neal");
      const nealDataRes = await res.json();
      setNealRooms(nealDataRes.data);
    } catch (error) {
      console.error("Failed to fetch Neal Marshall room data: ", error);
    }
  };

  useEffect(() => {
    getNealData();
  }, []);

  return { nealRooms };
};
