"use client";

import React from "react";
import dynamic from "next/dynamic";
import { DevTools } from "jotai-devtools";

const CanvasComponent = dynamic(() => import("@/components/canvas-component"), {
  ssr: false,
});
const CanvasClientContainer = () => {
  return (
    <>
      <CanvasComponent />
    </>
  );
};

export default CanvasClientContainer;
