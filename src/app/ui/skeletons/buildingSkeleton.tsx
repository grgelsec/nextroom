//import { RoomCard } from "../sidebar/roomCard";
import { BuildingTitle } from "../sidebar/buildingTitle";
import { Book } from "../sidebar/bookButton";
import { Skeleton } from "@heroui/skeleton";

export const BuildingSkeleton = () => {
  return (
    <div className="flex flex-col lg:w-full h-11/12 p-6 space-y-4 overflow-scroll items-center ">
      <Skeleton>
        <BuildingTitle name={"Wells Library"} />
      </Skeleton>
      <Skeleton>
        <Book link={"https://iub.libcal.com/reserve/spaces/wells"} />
      </Skeleton>
      <Skeleton className="flex flex-col lg:w-full p-4 bg-[#191919] shadow-2xl rounded-md space-y-4 font-extralight" />
    </div>
  );
};
