import { useEffect, useState } from "react";
import { room } from "../types";

export const useSpeaRooms = () => {
  const [speaRooms, setSpeaRooms] = useState<room[]>([]);

  const getSpeaData = async () => {
    try {
      const res = await fetch(`/api/scrape/spea`);
      const speaDataRes = await res.json();
      setSpeaRooms(speaDataRes.data);
    } catch (error) {
      console.error("Error occoured fetching data from spea library: ", error);
    }
  };
  useEffect(() => {
    getSpeaData();
  }, []);

  return { speaRooms };
};
