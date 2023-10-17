import { Term } from "@/app/context/term-context";

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string

const basic = btoa(`${client_id}:${client_secret}`)
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;


const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    }),
  });
 
  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
}

export const getTopTracks = async (time_range: Term = "short_term", limit: number = 50) => {
  const { access_token } = await getAccessToken()

  return fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTopArtists = async (time_range: Term = 'short_term', limit: number = 50) => {
  const { access_token } = await getAccessToken()

  return fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${time_range}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}


// TRACK DETAILS

export const getTrackDetails = async (track_id: string) => {
  const { access_token } = await getAccessToken()

  return fetch(`https://api.spotify.com/v1/tracks/${track_id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}
export const getTrackAudioFeatuers = async (track_id: string) => {
  const { access_token } = await getAccessToken()

  return fetch(`https://api.spotify.com/v1/audio-features/${track_id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}


// ARTIST DETAILS

export const getArtistDetails = async (id: string) => {
  const { access_token } = await getAccessToken()

  return fetch(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}