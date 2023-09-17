import { getNowPlaying } from "@/lib/spotify";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const response = await getNowPlaying()
  
  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  
  const { item, is_playing } = await response.json()

  if(item === null) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    });
  }

    const title = item.name
    const songUrl = item.external_urls.spotify
    const albumImageUrl = item.album.images[0].url
    const artist = item.artists.map((artist: { name: string }) => artist.name).join(', ')
    const isPlaying = is_playing

    return new Response(
      JSON.stringify({
        title,
        artist,
        songUrl,
        albumImageUrl,
        isPlaying,
      }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
          // 'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
          'cache-control': 'no-cache, no-store, max-age=0, must-revalidate'
        }
      }
    );
}

