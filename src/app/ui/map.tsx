"use client";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect } from "react";

export default function MapBackground() {
  const mapToken = process.env.NEXT_PUBLIC_MAPTOKEN;

  useEffect(() => {
    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/standard",
      center: [-86.5167, 39.171],
      zoom: 18,
      maxZoom: 18,
      minZoom: 18,
      pitch: 60,
      bearing: 225,
      dragPan: false,
      dragRotate: true,
    });

    map.on("style.load", () => {
      map.setConfigProperty("basemap", "lightPreset", "night");
    });

    const markerEle = document.createElement("div");
    markerEle.className = "bg-green-500 rounded-full w-3 h-3 shadow-lg glow";

    const popupElement = document.createElement("div");
    popupElement.className =
      "flex bg-white rounded-lg shadow-lg p-4 text-gray-800 background-transparent";
    popupElement.innerHTML =
      '<h3 class="font-bold">Marker Title</h3><p>This is a description of the marker.</p>';

    const popup = new mapboxgl.Popup() // Adjust the offset as needed
      .setDOMContent(popupElement);

    new mapboxgl.Marker(markerEle)
      .setLngLat([-86.5167, 39.171])
      .setPopup(popup)
      .addTo(map);

    return () => map.remove();
  }, []);

  return <div className="w-3/4 h-full" id="map"></div>;
}
