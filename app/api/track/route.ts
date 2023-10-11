import { getTrackAudioFeatuers, getTrackDetails } from "@/lib/spotify"
import { NextResponse } from "next/server"

export async function GET (request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('track_id')

  const trackResponse = await getTrackDetails(id as string)
  const trackFeatures = await getTrackAudioFeatuers(id as string)

  const data = await trackResponse.json()
  const features = await trackFeatures.json()

const details = {
  name: data.name,
  id: data.id,
  album: {
    name: data.album.name,
    href: data.album.external_urls.spotify,
    release_date: data.album.release_date
  },
  // @ts-ignore
  artist: data.artists.map(artist => artist.name).join(', '),
  songUrl: data.external_urls.spotify,
  songImg: data.album.images[0].url,
  duration: data.duration_ms,
  popularity: data.popularity,
  // Audio Features
  audioFeatures: {
    danceability: features.danceability,
    acousticness: features.acousticness,
    energy: features.energy,
    instrumentalness: features.instrumentalness,
    liveness: features.liveness,
    loudness: features.loudness,
    speechiness: features.speechiness,
    tempo: features.tempo,
    valence: features.valence,
  },
}

  return NextResponse.json(details, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    }
  })
}