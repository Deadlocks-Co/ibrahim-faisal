"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "@/content/photos";

export function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="group block w-full overflow-hidden rounded-lg bg-muted text-left">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
          priority={index < 4}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setOpen(false)}>
          <div className="max-h-[90vh] max-w-[90vw]">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-sm text-white">{photo.title}</p>
          </div>
        </div>
      )}
    </>
  );
}