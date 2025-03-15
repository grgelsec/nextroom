import { Suspense } from "react";
import MapBackground from "./ui/map";
import Sidebar from "./ui/sidebar/sidebar";
export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-end">
      <Sidebar />
      <Suspense fallback={<div className="w-3/4 h-full">Loading Map...</div>}>
        <MapBackground />
      </Suspense>
    </div>
  );
}
