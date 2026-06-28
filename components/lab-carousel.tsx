"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface LabItem {
  title: string;
  framing: string;
  status: string;
  slug: string;
  category: string;
}

const DURATION = 15000;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function LabCarousel({ labs }: { labs: LabItem[] }) {
  const [items, setItems] = useState<LabItem[]>([]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setItems(shuffle(labs));
  }, [labs]);

  const advance = (next: number) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(next);
      setProgressKey((k) => k + 1);
      setVisible(true);
    }, 350);
  };

  useEffect(() => {
    if (!items.length) return;
    timerRef.current = setTimeout(() => {
      advance((index + 1) % items.length);
    }, DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, items, progressKey]);

  const goTo = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    advance(i);
  };

  if (!items.length) return null;

  const current = items[index];

  return (
    <div className="mt-10 max-w-2xl">
      <div className="relative h-52 rounded-2xl border bg-muted/20 p-6">
        {/* Content */}
        <div
          className="absolute inset-0 p-6 pb-12"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 350ms ease",
          }}
        >
          <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
            <span>{current.category}</span>
            <span>{current.status}</span>
          </div>

          <h3 className="mt-4 text-xl font-light tracking-tight">
            {current.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">
            {current.framing}
          </p>

          <Link
            href={`/deadlock-labs/${current.slug}`}
            className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
          >
            Read idea <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Progress bar + dots — pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-4">
          <div className="h-px w-full overflow-hidden rounded-full bg-border">
            <div
              key={progressKey}
              className="h-full bg-foreground/40"
              style={{
                width: "100%",
                transformOrigin: "left",
                animation: `labprogress ${DURATION}ms linear forwards`,
              }}
            />
          </div>
          <div className="mt-2.5 flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Show ${items[i].title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-4 bg-foreground"
                    : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes labprogress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="labprogress"] { animation: none; transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
