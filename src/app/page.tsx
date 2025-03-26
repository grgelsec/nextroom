import { Suspense } from "react";
import MapBackground from "./ui/map";
import Sidebar from "./ui/sidebar/sidebar";
export default function Home() {
  return (
    <div className="flex flex-col flex-wrap w-screen h-screen overflow-scroll space-x-2 lg:px-4 lg:py-2">
      <Sidebar />
      <Suspense fallback={<div className="w-3/4 h-full">Loading Map...</div>}>
        <MapBackground />
      </Suspense>
    </div>
  );
}
