import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const slideshowDir = path.join(process.cwd(), 'public', 'slideshow')
  const files = fs.readdirSync(slideshowDir)
  const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map(file => `/slideshow/${file}`)

  return NextResponse.json({ images })
}