"use client";

import { getTodoById, updateTodo } from "@/lib/todo";
import { TodoType } from "@/lib/todoType";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const initialTodo: TodoType = {
  id: "",
  title: "",
  detail: "",
  status: "",
};

const STATUS_VALUE = ["NOT STARTED", "DOING", "DONE"];

const EditTodo = ({ id }: { id: string }) => {
  const router = useRouter();
  const [todo, setTodo] = useState<TodoType>(initialTodo);

  const hendleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value)
    setTodo({ ...todo, [name]: value });
  };

  const hendleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(confirm("更新してよろしいですか？")) {
      await updateTodo(todo);
      router.push("/");
      router.refresh();
    }
  };

  useEffect(() => {
    const getTodo = async () => {
      const todo = await getTodoById(id);
      if (todo) {
        setTodo(todo);
      }
    };
    getTodo();
  }, []);

  return (
    <div className="mx-auto py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <form
          className="mx-auto max-w-lg rounded-lg border"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                htmlFor="title"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                title
              </label>
              <input
                type="text"
                name="title"
                className="w-full rounded border text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={todo.title}
                onChange={hendleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="detail"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                detail
              </label>
              <textarea
                name="detail"
                className="h-32 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={todo.detail}
                onChange={hendleTextAreaChange}
              />
            </div>
            <div className="flex">
              {STATUS_VALUE.map((value) => (
                <div key={value} className="mx-3">
                  <label>
                    <input
                      type="radio"
                      name="status"
                      value={value}
                      checked={value === todo.status}
                      onChange={hendleInputChange}
                    />
                    {value}
                  </label>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
