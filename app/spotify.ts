import 'server-only'
import querystring from 'querystring'

const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const getAccessToken = async () => {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    }),
  });
 
  return response.json();
};


export async function getCurrentlyPlaying() {
  const { access_token } = await getAccessToken()

  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: 'no-store'
    }
  )
  
  return response
}