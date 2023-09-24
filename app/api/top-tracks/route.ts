import { getTopTracks } from "@/lib/spotify";
import { NextResponse, type NextRequest } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.map((track: any) => ({
    // @ts-ignore
    artist: track.artists.map(artist => artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    albumImageUrl: track.album.images[0].url
  }))

  return NextResponse.json(tracks, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    }
  })
}