"use client";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";

export default function MapBackground() {
  const mapToken = process.env.NEXT_PUBLIC_MAPTOKEN;

  const [selectedBuilding, setSelectedBuilding] = useState("");

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
    wellsMarker.onclick = function () {
      console.log(wellsMarker.id);
      setSelectedBuilding(wellsMarker.id);
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
    <div
      className="flex lg:w-3/4 md:w-3/4 w-full lg:h-full md:h-full h-1/2 rounded-lg items-start justify-center"
      id="map"
    ></div>
  );
}
