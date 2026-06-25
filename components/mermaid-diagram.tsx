'use client'

import { useEffect, useId, useRef } from 'react'

export function MermaidDiagram({ chart }: { chart: string }) {
  const uid = useId().replace(/:/g, 'x')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let live = true
    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({ startOnLoad: false, theme: 'base' })
      mermaid
        .render(uid, chart)
        .then(({ svg }) => {
          if (live && ref.current) ref.current.innerHTML = svg
        })
        .catch(() => {
          if (live && ref.current) ref.current.textContent = chart
        })
    })
    return () => {
      live = false
    }
  }, [chart, uid])

  return <div ref={ref} className="my-8 flex justify-center overflow-x-auto" />
}
