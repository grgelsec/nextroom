import { useEffect, useState } from "react";
import { room } from "../types";

export const useEducationRooms = () => {
  const [educationRooms, setEducationRooms] = useState<room[]>([]);

  const getEducationData = async () => {
    try {
      const res = await fetch(`/api/scrape/education`);
      const educationDataRes = await res.json();
      setEducationRooms(educationDataRes.data);
    } catch (error) {
      console.error("Failed to fetch education rooms: ", error);
    }
  };

  useEffect(() => {
    getEducationData();
  }, []);

  return { educationRooms };
};
