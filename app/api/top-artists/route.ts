import { Term } from "@/app/context/term-context"
import { getTopArtists } from "@/lib/spotify"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  
  const term = searchParams.get('term')
  const limit = searchParams.get('limit')
  
  const DEFAULT = 50
  const newLimit = limit === null ? DEFAULT : +limit

  const response = await getTopArtists(term as Term, newLimit)
  const { items } = await response.json()

  const artists = items.map((artist: any) => ({
    name: artist.name,
    id: artist.id,
    imageUrl: artist.images[1].url,
    artistUrl: artist.external_urls.spotify
  }))


  return NextResponse.json(artists, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    }
  })
}