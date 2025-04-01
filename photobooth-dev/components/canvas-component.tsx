"use client";
import React from "react";
import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite } from "pixi.js";
import ImageComponent from "./image-component";
import { useAtomValue } from "jotai";
import { urlFocusAtom } from "@/stores/app.store";
// import { DevTools } from "jotai-devtools";
// import "jotai-devtools/style.css";

extend({
  Container,
  Graphics,
  Sprite,
});

const CanvasComponent = () => {
  const url = useAtomValue(urlFocusAtom);
  return (
    <>
      {/* <DevTools /> */}
      <Application>
        <ImageComponent url={url} />
      </Application>
    </>
  );
};

export default CanvasComponent;
