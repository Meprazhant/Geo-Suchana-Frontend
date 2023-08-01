'use client'
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Head from "next/head";

const Mapcomponent = ({ pos }) => {
    const position = [27.6974, 85.3318]; // Latitude and Longitude of the map center
    const customIcon = new L.Icon({
        iconUrl: "https://freepngimg.com/download/symbol/62766-map-symbol-computer-location-icons-free-download-png-hd.png",
        iconSize: [32, 32], // [width, height] of the icon image
        iconAnchor: [16, 32], // The point of the icon that corresponds to the marker's location
        popupAnchor: [0, -32], // The point from which the popup should open relative to the iconAnchor
    });
    return (
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: '100%', zIndex: '10' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    A custom marker with a custom icon.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Mapcomponent;
