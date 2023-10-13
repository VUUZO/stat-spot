import { Term } from "@/app/context/term-context"
import { getTopArtists } from "@/lib/spotify"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const term = searchParams.get('term')

  const response = await getTopArtists(term as Term)
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