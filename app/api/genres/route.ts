import { Term } from "@/app/context/term-context"
import { getTopArtists } from "@/lib/spotify"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  
  const term = searchParams.get('term')
  const limit = searchParams.get('limit')

  const response = await getTopArtists(term as Term)
  const { items } = await response.json()


  const arr = items.map((item: any) => {
    return item.genres
  }).join()

  const unique = (val: string, idx: number, arr: string[]) => arr.indexOf(val) === idx
  const notempty = (val: string, idx: number, arr: string[]) => val !== ''

  let genres = arr.split(',').filter(unique).filter(notempty).slice(0, limit)


  return NextResponse.json(genres, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    }
  })
}