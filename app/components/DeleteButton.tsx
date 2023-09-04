"use client";

import { deleteTodo } from "@/lib/todo";
import { useRouter } from "next/navigation";

const DeleteButton = (props: { id: string }) => {
  const router = useRouter();
  const handleClick = async () => {
    if(confirm("削除してよろしいですか？")) {
      await deleteTodo(props.id);
      router.refresh();
    }
  };
  return (
    <button onClick={handleClick} className="text-red-500">
      delete
    </button>
  );
};

export default DeleteButton;
