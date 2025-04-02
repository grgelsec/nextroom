"use client";
import { RefObject, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RoomCard } from "./roomCard";
import { useLibraryRooms } from "@/app/hooks/useLibraryRooms";
// import { useSpeaRooms } from "@/app/hooks/useSpeaRooms";
// import { useEducationRooms } from "@/app/hooks/useEducationRooms";
// import { useNealRooms } from "@/app/hooks/useNealRooms";
// import { useMusicRooms } from "@/app/hooks/useMusicRooms";
// import { useSciencesRooms } from "@/app/hooks/useSciencesRooms";
//keys tell react when a component is 'truly new'.

interface SideBarProps {
  building: RefObject<string>;
}

const Sidebar = ({ building }: SideBarProps) => {
  //const [sidebarVisibility, setSideBarVisibility] = useState(false);
  const [activeBuilding, setActiveBuilding] = useState("");
  const { roomData } = useLibraryRooms();
  // const { speaRooms } = useSpeaRooms();
  // const { educationRooms } = useEducationRooms();
  // const { nealRooms } = useNealRooms();
  // const { musicRooms } = useMusicRooms();
  // const { sciencesRooms } = useSciencesRooms();

  console.log(roomData);
  // console.log(speaRooms);
  // console.log(educationRooms);
  // console.log(nealRooms);
  // console.log(musicRooms);
  // console.log(sciencesRooms);
  /*
  The issue with this approach is that both map background mount and the sidebar mount and building.current is "". Which is one of the keys to why it doesnt work

  You could just pass a state variable into the child component props but that would trigger a re-render of the map everytime a user wanted to click on a marker which is bad UX. 

  I tried to pass a ref that would I could feed into a state hook to cause a re-render every time the ref.current changed but that doesnt work becuase useRef doesnt trigger useEffect dependencies. You can technically include ref in there but that isnt watching ref.current. 

  useEffect(() => {
    setActiveBuilding(building.current);
    console.log(building.current);
  }, [building, activeBuilding]);
  */

  /*
  This approach uses polling. This is like someone checking csomething at regular intervals to see if it has changed.

  Since both the map and sidebar mount with empty values, the ref in the parent might get changed but that wont be reflected in the child until a re-render because useRef doesnt trigger a re-render. I did not to use a state variable because when the change was made in the parent, I didnt want the parent to re-render. So this polling pattern with the useEffect checks if the ref has changed every second and if it has then it sets the state and causes the side bar to re-render to show what you clicked on.

  If someone is reading this code and is wondering why I wrote all this. It is because I was stuck on this problem for a couple hours and I eventually explained what was happening to Claude and it showed me an example and it was spot on. So this is my way of making sure I understand what it wrote. I also feel an immense amount of guilt when I have to resort it because I dont want to become dependent on it. Maybe it's my prde.
  */

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (building.current !== activeBuilding) {
        setActiveBuilding(building.current);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [building, activeBuilding]);

  const transition = {
    duration: 0.4,
    delay: 0.05,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <AnimatePresence mode="wait">
      {activeBuilding != "" ? (
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
          <div className="flex flex-col lg:w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
            {roomData.map((room) => (
              <RoomCard key={room.room} room={room.room} times={room.times} />
            ))}
          </div>
          {/* <footer className="flex lg:w-full justify-center p-3 h-1/12">
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
          </footer> */}
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
          {/* <footer className="flex lg:w-full h-1/12 justify-center p-3">
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
          </footer> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
