//import { room } from "../types";

export const getWellsRooms = async () => {
  const url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await fetch(`${url}/api/scrape/wells`, {
      cache: "force-cache",
      next: { revalidate: 300 },
    });
    const libraryDataRes = await res.json();
    return libraryDataRes.data;
  } catch (error) {
    console.error("Failed to fetch Wells Rooms", error);
  }
};

export const getSpeaRooms = async () => {
  const url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await fetch(`${url}/api/scrape/spea`, {
      cache: "force-cache",
      next: { revalidate: 300 },
    });
    const speaDataRes = await res.json();
    return speaDataRes.data;
  } catch (error) {
    console.error("Error occoured fetching data from spea library: ", error);
  }
};

export const getSciencesRooms = async () => {
  const url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await fetch(`${url}/api/scrape/sciences`, {
      cache: "force-cache",
      next: { revalidate: 300 },
    });
    const sciencesResData = await res.json();
    return sciencesResData.data;
  } catch (error) {
    console.error("Failed to fetch sciences library room data: ", error);
  }
};

export const getNealRooms = async () => {
  const url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await fetch(`${url}/api/scrape/neal`, {
      cache: "force-cache",
      next: { revalidate: 300 },
    });
    const nealDataRes = await res.json();
    return nealDataRes.data;
  } catch (error) {
    console.error("Failed to fetch Neal Marshall room data: ", error);
  }
};

export const getMusicRooms = async () => {
  const url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await fetch(`${url}/api/scrape/music`, {
      cache: "force-cache",
      next: { revalidate: 300 },
    });
    const musicResData = await res.json();
    return musicResData.data;
  } catch (error) {
    console.error("Failed to fetch music library data: ", error);
  }
};

export const getEducationRooms = async () => {
  const url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await fetch(`${url}/api/scrape/education`, {
      cache: "force-cache",
      next: { revalidate: 300 },
    });
    const educationDataRes = await res.json();
    return educationDataRes.data;
  } catch (error) {
    console.error("Failed to fetch education rooms: ", error);
  }
};
