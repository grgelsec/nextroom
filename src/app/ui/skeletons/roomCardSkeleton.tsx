import { Skeleton } from "@heroui/skeleton";

export const RoomCardSkeleton = () => {
  return (
    <Skeleton className="flex flex-col lg:w-full p-4 bg-[#191919] shadow-2xl rounded-md space-y-4 font-extralight">
      <div>
        <h1 className="flex justify-items-start lg:w-full ">
          <Skeleton className="space-x-2 flex lg:w-full text-md "></Skeleton>
          <Skeleton className="flex w-1/2 justify-end">
            <Skeleton className="size-6"></Skeleton>
          </Skeleton>
        </h1>
      </div>
    </Skeleton>
  );
};
