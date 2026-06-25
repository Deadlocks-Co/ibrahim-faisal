'use client'

import { useState } from 'react'

interface ShareButtonProps {
  url: string
  shareText?: string
}

export function ShareButton({ url, shareText }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

  async function handleClick() {
    if (shareText) {
      try {
        await navigator.clipboard.writeText(shareText)
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      } catch {
        // clipboard blocked — just open LinkedIn
      }
    }
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-[#0077b5] hover:text-[#0077b5]"
      >
        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        {copied ? 'Copied — paste into LinkedIn' : 'Share'}
      </button>
    </div>
  )
}
