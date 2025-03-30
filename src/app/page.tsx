import MapBackground from "./ui/map";

export default function Home() {
  return (
    <div className="flex flex-col flex-wrap w-screen h-screen overflow-scroll space-x-2 lg:px-4 lg:py-2">
      <MapBackground />
    </div>
  );
}
