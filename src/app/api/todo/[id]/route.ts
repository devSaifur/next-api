import { NextRequest, NextResponse } from 'next/server'
import { DATA_SOURCE_URL } from '../route'

type Props = {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  //   const id = request.url.slice(request.url.lastIndexOf('/') + 1)
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`)
  const todo: TODO = await res.json()

  if (!id || !res.ok)
    return NextResponse.json({ message: 'Todo could not have been found' })

  return NextResponse.json(todo)
}
