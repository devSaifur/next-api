import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos'

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL)
  const todoData: TODO = await res.json()

  if (!todoData) {
    return NextResponse.json({ error: 'No data found' }, { status: 404 })
  }

  return NextResponse.json(todoData)
}
