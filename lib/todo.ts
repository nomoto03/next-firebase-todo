import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp } from "firebase/firestore"
import { db } from "./firebase"
import { TodoType } from "./todoType";

export const getTodos = async () => {
  const ref = collection(db, "todos");
  const querySnapshot = await getDocs(ref);
  const todos: TodoType[] = [];
  querySnapshot.forEach((doc) => {
    const todo: TodoType = {
      id: doc.id,
      title: doc.data().title,
      detail: doc.data().detail,
      status: doc.data().status
    }
    todos.push(todo)
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

export const deleteTodo = async (id: string) => {
  console.log("id: ", id)
  const ref = doc(db, "todos", id);
  await deleteDoc (ref);
}