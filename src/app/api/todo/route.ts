import { NextRequest, NextResponse } from 'next/server'

export const DATA_SOURCE_URL: string = process.env.DATA_SOURCE_URL as string
export const API_KEY: string = process.env.DATA_API_KEY as string

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL)
  const todoData: TODO[] = await res.json()

  if (!todoData) {
    return NextResponse.json({ error: 'No data found' }, { status: 404 })
  }

  return NextResponse.json(todoData)
}

export async function POST(request: NextRequest) {
  const { userId, title }: Partial<TODO> = await request.json()

  if (!userId || !title) {
    return NextResponse.json({ message: 'New todo is required' })
  }

  const res = await fetch(DATA_SOURCE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      API_KEY: API_KEY,
    },
    body: JSON.stringify({ userId, title, completed: false }),
  })

  const newTodo: TODO = await res.json()

  return NextResponse.json(newTodo)
}

export async function PUT(request: NextRequest) {
  const { userId, id, title, completed }: TODO = await request.json()

  if (!userId || !id || !title || typeof completed !== 'boolean')
    return NextResponse.json({ message: 'Missing todo data is required' })

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  })

  const updatedTodo: TODO = await res.json()

  return NextResponse.json(updatedTodo)
}

export async function DELETE(request: NextRequest) {
  const { id }: Partial<TODO> = await request.json()

  if (!id) {
    return NextResponse.json({ error: 'Id is required' }, { status: 400 })
  }

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
    },
  })

  return NextResponse.json({ message: `Todo ${id} deleted successfully` })
}
