//import { room } from "../types";

export const getWellsRooms = async () => {
  try {
    const res = await fetch(`/api/scrape/wells`, {
      next: { revalidate: 300 },
    });
    const libraryDataRes = await res.json();
    return libraryDataRes.data;
  } catch (error) {
    console.error("Failed to fetch Wells Rooms", error);
  }
};

export const getSpeaRooms = async () => {
  try {
    const res = await fetch(`/api/scrape/spea`, {
      next: { revalidate: 300 },
    });
    const speaDataRes = await res.json();
    return speaDataRes.data;
  } catch (error) {
    console.error("Error occoured fetching data from spea library: ", error);
  }
};

export const getSciencesRooms = async () => {
  try {
    const res = await fetch(`/api/scrape/sciences`, {
      next: { revalidate: 300 },
    });
    const sciencesResData = await res.json();
    return sciencesResData.data;
  } catch (error) {
    console.error("Failed to fetch sciences library room data: ", error);
  }
};

export const getNealRooms = async () => {
  try {
    const res = await fetch(`/api/scrape/neal`, {
      next: { revalidate: 300 },
    });
    const nealDataRes = await res.json();
    return nealDataRes.data;
  } catch (error) {
    console.error("Failed to fetch Neal Marshall room data: ", error);
  }
};

export const getMusicRooms = async () => {
  try {
    const res = await fetch(`/api/scrape/music`, {
      next: { revalidate: 300 },
    });
    const musicResData = await res.json();
    return musicResData.data;
  } catch (error) {
    console.error("Failed to fetch music library data: ", error);
  }
};

export const getEducationRooms = async () => {
  try {
    const res = await fetch(`/api/scrape/education`, {
      next: { revalidate: 300 },
    });
    const educationDataRes = await res.json();
    return educationDataRes.data;
  } catch (error) {
    console.error("Failed to fetch education rooms: ", error);
  }
};
