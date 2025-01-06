import React from "react";
import { Asghar } from "./Asghar";

export const Container = ({ parkingState = false }) => {
  return (
    <div
      className={`w-screen h-screen flex items-center justify-center transition-all duration-500 bg-${parkingState ? "green" : "red"}-500 animate-pulse`}
    >
      <Asghar />
    </div>
  );
};
