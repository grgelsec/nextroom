import { useEffect, useState } from "react";
import { room } from "../types";

export const useSciencesRooms = () => {
  const [sciencesRooms, setSciencesRooms] = useState<room[]>([]);

  const getSciencesData = async () => {
    try {
      const res = await fetch("/api/scrape/sciences");
      const sciencesResData = await res.json();
      setSciencesRooms(sciencesResData.data);
    } catch (error) {
      console.error("Failed to fetch sciences library room data: ", error);
    }
  };

  useEffect(() => {
    getSciencesData();
  }, []);

  return { sciencesRooms };
};
