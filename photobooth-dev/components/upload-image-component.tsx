"use client";
import { urlFocusAtom } from "@/stores/app.store";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useRef } from "react";

const UploadImageComponent = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setUrl = useSetAtom(urlFocusAtom);
  const url = useAtomValue(urlFocusAtom);
  const handleClick = () => {
    ref.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUrl(url);
    }
  };

  return (
    <div>
      <input
        ref={ref}
        accept="image/*"
        type="file"
        hidden
        onChange={handleChange}
      />
      {url}
      <button onClick={handleClick}>Upload</button>
    </div>
  );
};

export default UploadImageComponent;
