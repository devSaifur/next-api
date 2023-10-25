import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  //   const name = searchParams.get('name')
  //   const age = searchParams.get('age')

  const obj = Object.fromEntries(searchParams.entries())

  return NextResponse.json(obj)
}
