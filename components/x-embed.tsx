"use client";

import { useEffect, useRef } from "react";

export function XEmbed({
  handle,
  height = 400
}: {
  handle?: string;
  height?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!handle) return null;

  return (
    <div ref={ref}>
      <a
        className="twitter-timeline"
        data-height={height}
        data-theme="light"
        data-chrome="noheader nofooter transparent"
        href={`https://twitter.com/${handle}`}
      >
        Posts by @{handle}
      </a>
    </div>
  );
}