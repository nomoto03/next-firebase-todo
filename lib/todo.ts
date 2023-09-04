import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore"
import { db } from "./firebase"
import { TodoType } from "./todoType";
import { create } from "domain";

export const getTodos = async () => {
  const ref = collection(db, "todos");
  console.log("ref: ", ref)
  const querySnapshot = await getDocs(ref);
  const todos: TodoType[] = [];
  querySnapshot.forEach((doc) => {
    todos.push(doc.data() as TodoType)
  })
  return todos;
}

export const addTodo = async (title: string, detail: string) => {
  const ref = collection(db, "todos");
  const addedTodo = await addDoc(ref, {
    title: title,
    detail: detail,
    status: "NOT STARTED",
    create_at: serverTimestamp(),
    update_at: serverTimestamp()
  });
  console.log("addedTodo: ", addedTodo.id);
  return addedTodo;
}