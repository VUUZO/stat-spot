import { getCurrentlyPlaying } from "@/app/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getCurrentlyPlaying()
  
  if (response.status === 204 || response.status > 400) {
    return NextResponse.json(false)
  }
  
  const { item, is_playing } = await response.json()

  const track = {
    title: item.name, 
    songUrl: item.external_urls.spotify, 
    albumImageUrl: item.album.images[0].url,
    artist: item.artists.map((artist: { name: string }) => artist.name).join(', '),
    isPlaying: is_playing
  }

  return NextResponse.json({ track })  
}

