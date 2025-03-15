"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { room } from "@/app/types";
import { RoomCard } from "./roomCard";
//keys tell react when a component is 'truly new'.
export default function Sidebar() {
  const [sidebarVisibility, setSideBarVisibility] = useState(false);
  const [roomData, setRoomData] = useState<room[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScrape = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/scrape`);
        const data = await res.json();
        console.log(data.data);
        setRoomData(data.data);
      } catch (error) {
        console.error("Error fetching room data: ", error);
      } finally {
        setLoading(false);
      }
    };

    handleScrape();
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  console.log(roomData);

  return (
    <AnimatePresence mode="wait">
      {sidebarVisibility ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"inactive"}
          className="flex flex-col flex-wrap lg:w-1/4 h-full bg-black"
        >
          <header className="flex lg:w-full h-1/6 justify-center p-4">
            <div className="flex justify-center items-center w-full rounded-lg bg-white/15">
              <h1 className="text-white text-4xl font-mono">Nextroom</h1>
            </div>
          </header>
          <div className="flex flex-col lg:w-full h-4/6 justify-center p-6 space-y-4 overflow-scroll">
            {roomData.slice(0, 1).map((room) => (
              <RoomCard
                key={room.room}
                availability={room.availability}
                room={room.room}
                date={room.date}
              />
            ))}
          </div>
          <footer className="flex lg:w-full h-1/6 justify-center items-center p-4 back">
            <button
              className="flex justify-center items-center lg:w-1/2 bg-white/15 rounded-lg hover:bg-white/10 hover:ring-2 hover:ring-white duration-300 p-4"
              onClick={(e) => {
                e.preventDefault();
                setSideBarVisibility(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          </footer>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"active"}
          className="flex flex-col flex-wrap lg:w-1/4 h-full bg-black"
        >
          <header className="flex lg:w-full h-1/6 justify-center p-4">
            <div className="flex justify-center items-center w-full rounded-lg bg-white/15">
              <h1 className="text-white text-4xl font-mono">Nextroom</h1>
            </div>
          </header>
          <div className="flex flex-col lg:w-full h-4/6 justify-center font-mono p-4 space-y-4">
            <div className="flex lg:w-full h-1/2  p-2">
              This will be a hero section.
            </div>
            <div className="flex lg:w-full h-1/2  p-2"></div>
          </div>
          <footer className="flex lg:w-full h-1/6 justify-center items-center p-4">
            <button
              className="flex justify-center items-center lg:w-1/2 bg-white/15 rounded-lg hover:bg-white/10 hover:ring-2 hover:ring-white duration-300 p-4"
              onClick={(e) => {
                e.preventDefault();
                setSideBarVisibility(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
