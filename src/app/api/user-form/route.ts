import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const user: User = await request.json()
  console.log(user)

  return NextResponse.json({ user, message: 'User created successfully' })
}

type User = {
  name: string
  email: string
  message: string
}
