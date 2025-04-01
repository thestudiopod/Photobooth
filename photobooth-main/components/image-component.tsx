"use client";
import { Assets, FederatedPointerEvent, Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";
import { contain as calculateFit } from "@/utils";
import { useApplication } from "@pixi/react";
import { useImageTexture } from "@/hooks/use-image-texture";

interface Props {
  url: string;
}

const ImageComponent: React.FunctionComponent<Props> = (props) => {
  const { url } = props;
  const ref = useRef(null);
  const app = useApplication();
  const texture = useImageTexture(url);

  const width = texture?.width ?? 0;
  const height = texture?.height ?? 0;
  const maxWidth = app.app?.canvas.width ?? 0;
  const maxHeight = app.app?.canvas.height ?? 0;
  const scale = calculateFit(width, height, maxWidth, maxHeight, "contain");

  const x = (maxWidth - width * scale) / 2;
  const y = (maxHeight - height * scale) / 2;

  return (
    <pixiSprite
      ref={ref}
      x={x}
      y={y}
      eventMode={"static"}
      texture={texture}
      scale={scale}
    />
  );
};

export default ImageComponent;
