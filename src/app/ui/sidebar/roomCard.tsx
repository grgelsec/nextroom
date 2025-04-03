import { room } from "@/app/types";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { easeInOut } from "motion";

export const RoomCard = ({ room, times }: room) => {
  const [cardExtend, setCardExtend] = useState(true);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{
          duration: 0.6,
          ease: easeInOut,
        }}
        className="flex flex-col flex-wrap lg:w-full p-6 bg-[#191919] shadow-2xl rounded-md space-y-4 font-extralight"
      >
        <motion.div
          key={"openCard"}
          className="space-y-4"
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: 0.04,
            ease: easeInOut,
          }}
        >
          <h1 className=" flex justify-items-start lg:w-full">
            <div className="space-x-2 flex w-1/2">
              <p>{room}</p>
              <p>
                {times
                  .slice(1, 2)
                  .map((room) =>
                    room.reserved == "Available" ? (
                      <a key={"true"}>✅</a>
                    ) : (
                      <a key={"false"}>🚫</a>
                    )
                  )}
              </p>
            </div>
            <motion.button
              whileTap={{ rotate: 3 }}
              className="flex w-1/2 justify-end"
              onClick={(e) => {
                e.preventDefault();
                setCardExtend(!cardExtend);
              }}
            >
              {cardExtend ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </motion.button>
          </h1>
          {cardExtend ? (
            <></>
          ) : (
            <div className="space-y-4">
              {times.slice(1, 6).map((room) => (
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.2,

                    ease: easeInOut,
                  }}
                  key={room.date}
                  className="flex flex-col lg:w-full flex-wrap"
                >
                  {room.date != null ? (
                    <div
                      key={room.date}
                      className={`flex justify-center ${
                        room.reserved == "Available"
                          ? `text-sm ring-2 p-2 rounded-xl ring-green-400
                            shadow-[0_0_8px_rgba(52,211,153,0.7),0_0_15px_rgba(16,185,129,0.4)] text-white
                            hover:shadow-[0_0_10px_rgba(52,211,153,0.8),0_0_20px_rgba(16,185,129,0.5)]
                            transition-all duration-300`
                          : `text-sm ring-2 p-2 rounded-xl ring-red-400
                            shadow-[0_0_8px_rgba(248,113,113,0.7),0_0_15px_rgba(220,38,38,0.4)] text-white
                            hover:shadow-[0_0_10px_rgba(248,113,113,0.8),0_0_20px_rgba(220,38,38,0.5)]
                            transition-all duration-300`
                      }`}
                    >
                      {room.date}
                    </div>
                  ) : (
                    <p>Room not Available</p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
