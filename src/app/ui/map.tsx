"use client";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import Sidebar from "./sidebar/sidebar";

export default function MapBackground() {
  const mapToken = process.env.NEXT_PUBLIC_MAPTOKEN;

  //useRef does not cuase the component to rerender
  const building = useRef("");
  useEffect(() => {
    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/standard",
      center: [-86.5167, 39.171],
      zoom: 18,
      maxZoom: 18,
      minZoom: 9,
      pitch: 60,
      bearing: 225,
      dragPan: true,
      dragRotate: true,
    });

    map.on("style.load", () => {
      map.setConfigProperty("basemap", "lightPreset", "night");
    });

    const wellsMarker = document.createElement("button");
    wellsMarker.className = "bg-green-500 rounded-full w-3 h-3 shadow-lg glow";
    wellsMarker.id = "WellsLibrary";

    wellsMarker.onclick = function handleClick() {
      building.current = wellsMarker.id;
      console.log(building);
      return wellsMarker.id;
    };

    new mapboxgl.Marker(wellsMarker)
      .setLngLat([-86.5167, 39.171])
      .addClassName("WellsLibrary")
      .addTo(map)
      .getElement();

    return () => map.remove();
  });

  return (
    <>
      <Sidebar building={building} />

      <div
        className="flex lg:w-3/4 md:w-3/4 w-full lg:h-full md:h-full h-1/2 rounded-lg items-start justify-center"
        id="map"
      ></div>
    </>
  );
}
