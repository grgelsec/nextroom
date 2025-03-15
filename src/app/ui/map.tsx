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

    return () => map.remove();
  }, []);

  return <div className="w-3/4 h-full" id="map"></div>;
}
