import { getTopTracks } from "@/lib/spotify";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track: any) => ({
    // @ts-ignore
    artist: track.artists.map(artist => artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    albumImageUrl: track.album.images[0].url
  }))

  return new Response(JSON.stringify(tracks), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'      
    }
  })
}