"use client";
import { use } from "react";
import { RoomCard } from "./roomCard";
import { room } from "@/app/types";

export const WellsRooms = ({ rooms }: { rooms: Promise<room[]> }) => {
  const wellsRoomData: room[] = use(rooms);
  return (
    <>
      {wellsRoomData.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </>
  );
};

export const EducationRooms = ({ rooms }: { rooms: Promise<room[]> }) => {
  const educationRoomData: room[] = use(rooms);
  return (
    <>
      {educationRoomData.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </>
  );
};

export const MusicRooms = ({ rooms }: { rooms: Promise<room[]> }) => {
  const musicRoomData: room[] = use(rooms);
  return (
    <>
      {musicRoomData.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </>
  );
};

export const NealRooms = ({ rooms }: { rooms: Promise<room[]> }) => {
  const nealRoomData: room[] = use(rooms);
  return (
    <>
      {nealRoomData.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </>
  );
};

export const ScienceRooms = ({ rooms }: { rooms: Promise<room[]> }) => {
  const scienceRoomData: room[] = use(rooms);
  return (
    <>
      {scienceRoomData.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </>
  );
};

export const SpeaRooms = ({ rooms }: { rooms: Promise<room[]> }) => {
  const speaRoomData: room[] = use(rooms);
  return (
    <>
      {speaRoomData.map((room) => (
        <RoomCard key={room.room} room={room.room} times={room.times} />
      ))}
    </>
  );
};
