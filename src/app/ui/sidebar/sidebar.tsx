import { useState } from "react";
import { motion } from "motion/react";

export default function Sidebar() {
  const [sidebarVisibility, setSideBarVisibility] = useState(false);
  return (
    <>
      {sidebarVisibility ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col flex-wrap lg:w-1/4 h-full bg-black"
        >
          <header className="flex lg:w-full h-1/6 justify-center p-4">
            <div className="flex justify-center items-center w-full rounded-lg bg-white/15">
              <h1 className="text-white text-4xl font-mono">Nextroom</h1>
            </div>
          </header>
          <footer className="flex lg:w-full h-1/6 justify-center items-center p-4">
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
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col flex-wrap lg:w-1/4 h-full bg-black"
        >
          <header className="flex lg:w-full h-1/6 justify-center p-4">
            <div className="flex justify-center items-center w-full rounded-lg bg-white/15">
              <h1 className="text-white text-4xl font-mono">Nextroom</h1>
            </div>
          </header>
          <div className="flex flex-col lg:w-full h-4/6 justify-center ring p-4 space-y-4">
            <div className="flex lg:w-full h-1/2 ring p-2"></div>
            <div className="flex lg:w-full h-1/2 ring p-2"></div>
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
    </>
  );
}
