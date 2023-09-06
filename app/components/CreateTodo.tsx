"use client";

import { addTodo } from "@/lib/todo";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const CreateTodo = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const detailRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(confirm("登録してよろしいですか？")) {
      await addTodo(titleRef.current!.value, detailRef.current!.value);
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="mx-auto py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <form className="mx-auto max-w-lg rounded-lg border" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              title:
            </label>
            <input
                type="text"
                ref={titleRef}
                name="title"
                className="w-full rounded border bg-gray-50 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                required
              />
          </div>
          <div>
            <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              detail:
            </label>
            <textarea ref={detailRef} name="detail" className="h-32 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>
          <button type="submit" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
            create
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
