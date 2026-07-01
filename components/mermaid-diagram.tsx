'use client'

import { useEffect, useId, useRef } from 'react'
import { useTheme } from 'next-themes'

export function MermaidDiagram({ chart }: { chart: string }) {
  const uid = useId().replace(/:/g, 'x')
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    let live = true
    const theme = resolvedTheme === 'dark' ? 'dark' : 'base'
    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({ startOnLoad: false, theme })
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
  }, [chart, uid, resolvedTheme])

  return <div ref={ref} className="my-8 flex justify-center overflow-x-auto" />
}
