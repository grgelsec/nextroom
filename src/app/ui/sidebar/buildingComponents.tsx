import {
  getWellsRooms,
  getSpeaRooms,
  getEducationRooms,
  getMusicRooms,
  getNealRooms,
  getSciencesRooms,
} from "@/app/services/getLibraryRooms";
import { Suspense } from "react";
import {
  EducationRooms,
  MusicRooms,
  NealRooms,
  ScienceRooms,
  SpeaRooms,
  WellsRooms,
} from "./buildingRooms";
import { RoomCardSkeleton } from "../skeletons/roomCardSkeleton";
import { RoomErrorComponent } from "./roomError";
import { notFound } from "next/navigation";

/*
Keep server components focused on:
  Data fetching
  Heavy computations
  Access to backend resources
Use client components for:
  User interactions
  State management
Browser APIs
*/

export const Wells = () => {
  try {
    const wellsData = getWellsRooms();

    if (!wellsData) {
      notFound();
    }

    //If you try to resolve a promise in the same component then the suspension is already reached and so the streaming wont work because the fallback components wont render because once the promise resolves then the suspense boundery is pointless.

    //You eseentially need to drop the data into the safety net which is the child component which unwraps the promise and strucutres the data in the client.

    return (
      <Suspense fallback={<RoomCardSkeleton />}>
        <WellsRooms rooms={wellsData} />
      </Suspense>
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unkown Error");
    return <RoomErrorComponent />;
  }
};

export const Education = () => {
  try {
    const educationData = getEducationRooms();

    if (!educationData) {
      notFound();
    }
    return (
      <Suspense fallback={<RoomCardSkeleton />}>
        <EducationRooms rooms={educationData} />
      </Suspense>
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unkown Error");
    return <RoomErrorComponent />;
  }
};

export const Music = () => {
  try {
    const musicData = getMusicRooms();
    return (
      <Suspense fallback={<RoomCardSkeleton />}>
        <MusicRooms rooms={musicData} />
      </Suspense>
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unkown Error");
    return <RoomErrorComponent />;
  }
};

export const NealMarshall = () => {
  try {
    const nealData = getNealRooms();
    return (
      <Suspense fallback={<RoomCardSkeleton />}>
        <NealRooms rooms={nealData} />
      </Suspense>
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unkown Error");
    return <RoomErrorComponent />;
  }
};

export const Sciences = () => {
  try {
    const sciencesData = getSciencesRooms();
    return (
      <Suspense fallback={<RoomCardSkeleton />}>
        <ScienceRooms rooms={sciencesData} />
      </Suspense>
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unkown Error");
    return <RoomErrorComponent />;
  }
};

export const SPEA = () => {
  try {
    const speaData = getSpeaRooms();
    return (
      <Suspense fallback={<RoomCardSkeleton />}>
        <SpeaRooms rooms={speaData} />
      </Suspense>
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unkown Error");
    return <RoomErrorComponent />;
  }
};
