"use client";
import { useLibraryRooms } from "@/app/hooks/useLibraryRooms";
import { useSpeaRooms } from "@/app/hooks/useSpeaRooms";
import { useEducationRooms } from "@/app/hooks/useEducationRooms";
import { useNealRooms } from "@/app/hooks/useNealRooms";
import { useMusicRooms } from "@/app/hooks/useMusicRooms";
import { useSciencesRooms } from "@/app/hooks/useSciencesRooms";
import { RoomCard } from "./roomCard";
import { BuildingTitle } from "./buildingTitle";
import { Book } from "./bookButton";
import { Suspense } from "react";

export const Wells = () => {
  const { roomData } = useLibraryRooms();
  return (
    <Suspense
      fallback={
        <div className="text-white font-extralight text-2xl">Loading...</div>
      }
    >
      <div className="flex flex-col lg:w-full h-11/12 p-6 space-y-4 overflow-scroll items-center ">
        <BuildingTitle name={"Wells Library"} />
        <Book link={"https://iub.libcal.com/reserve/spaces/wells"} />
        {roomData.map((room) => (
          <RoomCard key={room.room} room={room.room} times={room.times} />
        ))}
      </div>
    </Suspense>
  );
};

export const Education = () => {
  const { educationRooms } = useEducationRooms();
  return (
    <div className="flex flex-col lg:w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
      <h1 className="text-xl font-extralight pb-4">Education Library</h1>
      <Book link={"https://iub.libcal.com/reserve/spaces/education"} />
      {educationRooms.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </div>
  );
};

export const Music = () => {
  const { musicRooms } = useMusicRooms();
  return (
    <div className="flex flex-col lg:w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
      <h1 className="text-xl font-extralight pb-4">Cook Music Library</h1>
      <Book link={"https://iub.libcal.com/spaces?lid=14001"} />
      {musicRooms.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </div>
  );
};

export const NealMarshall = () => {
  const { nealRooms } = useNealRooms();
  return (
    <div className="flex flex-col lg:w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
      <h1 className="text-xl font-extralight pb-4">Neal Marshall Library</h1>
      <Book link={"https://iub.libcal.com/reserve/spaces/nealmarshall"} />
      {nealRooms.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </div>
  );
};

export const Sciences = () => {
  const { sciencesRooms } = useSciencesRooms();
  return (
    <div className="flex flex-col lg:w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
      <h1 className="text-xl font-extralight pb-4">IUB Sciences Library</h1>
      <Book link={"https://iub.libcal.com/reserve/spaces/sciences"} />
      {sciencesRooms.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </div>
  );
};

export const SPEA = () => {
  const { speaRooms } = useSpeaRooms();
  return (
    <div className="flex flex-col lg:w-full h-11/12 p-6 space-y-4 overflow-scroll items-center">
      <BuildingTitle name={"Business/SPEA Library"} />
      <Book link={"https://iub.libcal.com/reserve/spaces/bsic"} />
      {speaRooms.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </div>
  );
};
