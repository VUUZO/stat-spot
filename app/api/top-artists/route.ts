import { getTopArtists } from "@/lib/spotify"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET() {
  const response = await getTopArtists()
  const { items } = await response.json()

  const artists = items.map((artist: any) => ({
    name: artist.name,
    id: artist.id,
    imageUrl: artist.images[0].url,
    artistUrl: artist.external_urls.spotify
  }))


  return NextResponse.json(artists, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    }
  })
}