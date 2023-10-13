import { Term } from "@/app/context/term-context";
import { getTopTracks } from "@/lib/spotify";
import { NextResponse, type NextRequest } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const term = searchParams.get('term')

  const response = await getTopTracks(term as Term)
  const { items } = await response.json()

  const tracks = items.map((track: any) => ({
    // @ts-ignore
    artist: track.artists.map(artist => artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    albumImageUrl: track.album.images[0].url,
    term,
    track_id: track.id
  }))

  return NextResponse.json(tracks, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    }
  })
}