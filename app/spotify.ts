export type CurrentlyPlaying = {
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}


export async function getAccessToken() {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')

  const params = new URLSearchParams()
  params.append('grant_type', 'refresh_token')
  params.append('refresh_token', process.env.SPOTIFY_REFRESH_TOKEN!)

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  })

  const result = await response.json()
  return result.access_token
}

export async function getCurrentlyPlaying() {
  const access_token = await getAccessToken()

  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    { headers: { Authorization: `Bearer ${access_token}` }, cache: 'no-store' }
  )

  if (response.status === 204 || response.status > 400) {
    return false
  }

  const song = await response.json()
  const albumImageUrl = song.item.album.images[0].url
  // @ts-ignore
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
  const isPlaying = song.is_playing
  const songUrl = song.item.external_urls.spotify
  const title = song.item.name

  return {
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  } as CurrentlyPlaying
}


export type Fav = {
  albumImageUrl: string
  artist: string
  songUrl: string
  title: string
}

export async function getFavSongs() {
  const access_token = await getAccessToken()

  const response = await fetch(
    'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1',
    { headers: { Authorization: `Bearer ${access_token}` }, cache: 'no-store' }
  )
  
  if (response.status === 204 || response.status > 400) {
    return false
  }

  const featured = await response.json()
  const title = featured.items[0].name
  const albumImageUrl = featured.items[0].album.images[1].url
  const artist = featured.items[0].artists[0].name
  const songUrl = featured.items[0].external_urls.spotify

  return {
    albumImageUrl,
    title,
    artist,
    songUrl
  } as Fav
}