import { readFileSync } from 'fs'
import { join } from 'path'
import { ImageResponse } from 'next/og'
import { getItem, getCollection } from '@/lib/content'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return getCollection('notes').map((note) => ({ slug: note.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = getItem('notes', slug)

  if (note?.thumbnail) {
    try {
      const imagePath = join(process.cwd(), 'public', String(note.thumbnail))
      const buffer = readFileSync(imagePath)
      return new Response(buffer, { headers: { 'content-type': 'image/png' } })
    } catch {
      // fall through to text fallback
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f172a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 60,
        }}
      >
        <div style={{ color: '#94a3b8', fontSize: 16, marginBottom: 16, letterSpacing: 4 }}>
          LAB NOTES
        </div>
        <div style={{ color: '#f8fafc', fontSize: 52, fontWeight: 300, lineHeight: 1.2 }}>
          {String(note?.title ?? 'Lab Note')}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
