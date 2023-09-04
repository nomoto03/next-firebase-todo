'use client'

import { addTodo } from "@/lib/todo";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const CreateTodo = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const detailRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodo(titleRef.current!.value, detailRef.current!.value)
    router.push("/")
    router.refresh()
  }

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            title:
            <input type='text' ref={titleRef} name="title" className="bg-gray-100" required />
          </label>
        </div>
        <div>
          <label>
            detail:
            <textarea ref={detailRef} name="detail" className="bg-gray-100" />
          </label>
        </div>
        <button type="submit" className="bg-sky-500 rounded">create</button>
      </form>
    </div>
  )
}

export default CreateTodo