"use client";
import { RefObject, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RoomCard } from "./roomCard";
import useLibraryRooms from "@/app/hooks/useLibraryRooms";
//keys tell react when a component is 'truly new'.

interface SideBarProps {
  building: RefObject<string>;
}

const Sidebar = ({ building }: SideBarProps) => {
  const [sidebarVisibility, setSideBarVisibility] = useState(false);
  const { roomData } = useLibraryRooms();

  console.log(building.current);

  const transition = {
    duration: 0.4,
    delay: 0.05,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <AnimatePresence mode="wait">
      {sidebarVisibility ? (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={transition}
          key={"inactive"}
          className="flex flex-col flex-wrap lg:w-1/4 md:w-1/4 w-full lg:h-full md:h-full h-1/2  items-end rounded-lg"
        >
          <header className="flex lg:w-full justify-center p-4 h-1/12 space-x-4 text-white font-extralight items-end ">
            <p>Available: ✅</p>
            <p>Booked: 🚫</p>
          </header>
          <div className="flex flex-col lg:w-full h-10/12 p-6 space-y-4 overflow-scroll items-center">
            {roomData.map((room) => (
              <RoomCard key={room.room} room={room.room} times={room.times} />
            ))}
          </div>
          <footer className="flex lg:w-full justify-center p-3 h-1/12">
            <button
              className="flex justify-center items-center lg:w-1/4 rounded-lg hover:bg-white/10 hover:ring hover:ring-white duration-300 p-4 shadow-2xl"
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
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={transition}
          key={"active"}
          className="flex flex-col flex-wrap lg:w-1/4 md:w-1/4 w-full lg:h-full md:h-full h-1/2 font-extralight rounded-lg"
        >
          <header className="flex lg:w-full h-2/12 justify-center p-4">
            <div className="flex justify-center items-center w-full rounded-lg shadow-2xl">
              <h1 className="text-white text-5xl font-thin">Nextroom</h1>
            </div>
          </header>
          <div className="flex flex-col lg:w-full h-9/12 justify-center p-4 space-y-4">
            <div className="flex lg:w-full h-1/2  p-2">
              This will be a hero section.
            </div>
            <div className="flex lg:w-full h-1/2  p-2"></div>
          </div>
          <footer className="flex lg:w-full h-1/12 justify-center p-3">
            <button
              className="flex justify-center items-center lg:w-1/4 rounded-lg hover:bg-white/10 hover:ring hover:ring-white duration-300 p-4 shadow-2xl"
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
};

export default Sidebar;
