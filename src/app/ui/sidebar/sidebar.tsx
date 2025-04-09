"use client";
import { RefObject, useEffect, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import {
  Wells,
  SPEA,
  Education,
  Music,
  NealMarshall,
  Sciences,
} from "./buildingComponents";
//import { Suspense } from "react";
import { Book } from "./bookButton";
import { BuildingTitle } from "./buildingTitle";
//keys tell react when a component is 'truly new'.

interface SideBarProps {
  building: RefObject<string>;
}

const Sidebar = ({ building }: SideBarProps) => {
  const [activeBuilding, setActiveBuilding] = useState("");

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
    duration: 0.6,
    ease: easeInOut,
  };

  return (
    <AnimatePresence mode="wait">
      {activeBuilding != "" ? (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={transition}
          key={"inactive"}
          className="flex flex-col flex-wrap lg:w-1/4 md:w-1/4 w-full lg:h-full md:h-full h-1/2 lg:items-end items-center justify-center rounded-lg overflow-scroll p-4"
        >
          <header className="flex lg:w-full justify-center p-4 h-1/12 space-x-4 text-white font-extralight items-end">
            <p>Available: ✅</p>
            <p>Booked: 🚫</p>
          </header>
          {activeBuilding == "WellsLibrary" ? (
            <div className="flex flex-col lg:w-full w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
              <BuildingTitle name={"Wells Library"} />
              <Book link={"https://iub.libcal.com/reserve/spaces/wells"} />
              <Wells />
            </div>
          ) : (
            <></>
          )}
          {activeBuilding == "SpeaLibrary" ? (
            <div className="flex flex-col lg:w-full w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
              <BuildingTitle name={"Business/SPEA Library"} />
              <Book link={"https://iub.libcal.com/reserve/spaces/bsic"} />
              <SPEA />
            </div>
          ) : (
            <></>
          )}
          {activeBuilding == "SciencesLibrary" ? (
            <div className="flex flex-col lg:w-full w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
              <h1 className="text-xl font-extralight pb-4">
                IUB Sciences Library
              </h1>
              <Book link={"https://iub.libcal.com/reserve/spaces/sciences"} />
              <Sciences />
            </div>
          ) : (
            <></>
          )}
          {activeBuilding == "NealLibrary" ? (
            <div className="flex flex-col lg:w-full w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
              <h1 className="text-xl font-extralight pb-4">
                Neal Marshall Library
              </h1>
              <Book
                link={"https://iub.libcal.com/reserve/spaces/nealmarshall"}
              />
              <NealMarshall />
            </div>
          ) : (
            <></>
          )}
          {activeBuilding == "MusicLibrary" ? (
            <div className="flex flex-col lg:w-full w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
              <h1 className="text-xl font-extralight pb-4">
                Cook Music Library
              </h1>
              <Book link={"https://iub.libcal.com/spaces?lid=14001"} />
              <Music />
            </div>
          ) : (
            <></>
          )}
          {activeBuilding == "EducationLibrary" ? (
            <div className="flex flex-col lg:w-full w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
              <h1 className="text-xl font-extralight pb-4">
                Education Library
              </h1>
              <Book link={"https://iub.libcal.com/reserve/spaces/education"} />
              <Education />
            </div>
          ) : (
            <></>
          )}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
