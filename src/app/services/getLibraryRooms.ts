//import { room } from "../types";

export const getLibraryRooms = async () => {
  try {
    const res = await fetch(`/api/scrape/wells`, {
      cache: "force-cache",
      next: { revalidate: 300 },
    });
    const libraryDataRes = await res.json();
    return libraryDataRes.data;
  } catch (error) {
    console.error("Failed to fetch Wells Rooms", error);
  }
};
