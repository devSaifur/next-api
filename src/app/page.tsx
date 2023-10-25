'use client'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setUsername('')
    setEmail('')
    setMessage('')

    const res = await fetch('/api/user-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, message }),
    })

    const data = await res.json()
    console.log(data)
  }

  return (
    <main
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 items-center justify-center min-h-screen'
    >
      <form className='flex flex-col gap-2'>
        <label htmlFor='username'>Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type='text'
          className='text-black p-1 rounded-sm bg-neutral-300'
        />

        <label htmlFor='email'>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          className='text-black p-1 rounded-sm bg-neutral-300'
        />

        <label htmlFor='message'>Message</label>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type='text'
          className='text-black p-1 rounded-sm bg-neutral-300'
        />

        <button type='submit' className='bg-neutral-600 rounded-sm mt-2'>
          Send
        </button>
      </form>

      <div>
        <Link className='hover:underline uppercase' href='/todo'>
          Visit TODO page
        </Link>
      </div>
    </main>
  )
}
