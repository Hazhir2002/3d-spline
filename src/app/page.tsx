"use client";

import Spline from "@splinetool/react-spline/next";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws/data/");

    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      setData((prevData) => [...prevData, receivedData.message]); // Append new data
    };

    socket.onopen = () => {
      console.log("WebSocket connection opened.");
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    return () => {
      socket.close(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div>
      <Suspense>
        <Spline scene="https://prod.spline.design/tnPRRQl4ftuFHiez/scene.splinecode" />
      </Suspense>
    </div>
  );
}
