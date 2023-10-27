const TODO = async () => {
  const res = await fetch('http://localhost:3000/api/todo')
  const todo = await res.json()
  const todoData: TODO[] = todo.data

  return (
    <main className='flex flex-col gap-4'>
      {todoData.map((todo: TODO) => {
        return (
          <div className='flex max-w-2xl pl-10' key={todo.id}>
            <li className='my-2'>{todo.title}</li>
            <button className='bg-red-400 px-6 h-8 rounded-sm ml-auto'>
              Delete
            </button>
          </div>
        )
      })}
    </main>
  )
}

export default TODO
