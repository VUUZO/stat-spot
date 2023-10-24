import { getRecentlyPlayed } from "@/lib/spotify";
import { NextResponse, type NextRequest } from "next/server";

export const dynamic = 'force-dynamic'

export type RecentTrack = {
  played_at: number
  artist: string
  title: string
  id: string
  spotifyUrl: string
  imageUrl: string
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const limit = searchParams.has('limit') ? +searchParams.get('limit')!: 50

  const response = await getRecentlyPlayed(limit)
  const { items } = await response.json()
  
  const recent: RecentTrack[] = items.map((item: any) => ({
    played_at: item.played_at,
    // @ts-ignore
    artist: item.track.album.artists.map(artist => artist.name).join(', '),
    title: item.track.name,
    id: item.track.id,
    spotifyUrl: item.track.external_urls.spotify,
    imageUrl: item.track.album.images[1].url,
  }))
  return NextResponse.json(recent, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    }
  })
}