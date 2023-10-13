import { getArtistDetails } from "@/lib/spotify"
import { NextResponse } from "next/server"

export async function GET (request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const artistResponse = await getArtistDetails(id as string) 

  const data = await artistResponse.json()

  const details = {
    name: data.name,
    imgUrl: data.images[0].url,
    spotifyUrl: data.external_urls.spotify,
    popularity: data.popularity,
    followers: data.followers.total,
    genres: data.genres
  }

  return NextResponse.json(details, {
    status: 200,
    headers: {
      'content-type': 'application/json'
    }
  })
}