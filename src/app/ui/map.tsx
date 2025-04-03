"use client";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import Sidebar from "./sidebar/sidebar";

const MapBackground = () => {
  const mapToken = process.env.NEXT_PUBLIC_MAPTOKEN;

  //useRef does not cuase the component to rerender, sends the selected building
  const building = useRef("");
  useEffect(() => {
    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/standard",
      center: [-86.5167, 39.171],
      zoom: 17,
      pitch: 60,
      bearing: 225,
      dragPan: true,
      dragRotate: true,
    });

    map.on("style.load", () => {
      map.setConfigProperty("basemap", "lightPreset", "night");
    });

    //nealmarshall library
    const nealMarker = document.createElement("button");
    nealMarker.className = "bg-green-500 rounded-full w-3 h-3 shadow-lg glow";
    nealMarker.id = "NealLibrary";

    nealMarker.onclick = function handleClick() {
      building.current = nealMarker.id;
      console.log(building.current);
    };

    new mapboxgl.Marker(nealMarker)
      .setLngLat([-86.5166993, 39.1683026])
      .addClassName("nealLibrary")
      .addTo(map)
      .getElement();

    //sciences library
    const sciencesMarker = document.createElement("button");
    sciencesMarker.className =
      "bg-green-500 rounded-full w-3 h-3 shadow-lg glow";
    sciencesMarker.id = "SciencesLibrary";

    sciencesMarker.onclick = function handleClick() {
      building.current = sciencesMarker.id;
      console.log(building.current);
    };

    new mapboxgl.Marker(sciencesMarker)
      .setLngLat([-86.5228239, 39.16596191])
      .addClassName("SciencesLibrary")
      .addTo(map)
      .getElement();

    //spea library
    const speaMarker = document.createElement("button");
    speaMarker.className = "bg-green-500 rounded-full w-3 h-3 shadow-lg glow";
    speaMarker.id = "SpeaLibrary";

    speaMarker.onclick = function handleClick() {
      building.current = speaMarker.id;
      console.log(building.current);
    };

    new mapboxgl.Marker(speaMarker)
      .setLngLat([-86.5177, 39.1725])
      .addClassName("SpeaLibrary")
      .addTo(map)
      .getElement();

    //wells library
    const wellsMarker = document.createElement("button");
    wellsMarker.className = "bg-green-500 rounded-full w-3 h-3 shadow-lg glow";
    wellsMarker.id = "WellsLibrary";

    wellsMarker.onclick = function handleClick() {
      building.current = wellsMarker.id;
      console.log(building.current);
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
};

export default MapBackground;
