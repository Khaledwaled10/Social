import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-32">
      <ClipLoader color="#155dfb" size={50} />
    </div>
  );
}
