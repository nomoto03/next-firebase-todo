import Link from "next/link"

const TodoSearch = () => {

  return (
    <div className='flex justify-between p-3'>
      <span>TodoSearch</span>
      <div>
        <Link href={"/todo/create"} className='text-sky-500'>create</Link>
      </div>
    </div>
  )
}

export default TodoSearch