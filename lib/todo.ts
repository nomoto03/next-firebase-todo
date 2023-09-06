import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, serverTimestamp, updateDoc } from "firebase/firestore"
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

export const getTodoById = async (id: string) => {
  const ref = doc(db, "todos", id);
  const docSnap = await getDoc(ref)

  if (docSnap.exists()) {
    const todo: TodoType = {...docSnap.data() as TodoType, id: docSnap.id};
    return todo
  } else {
    console.log("todoを取得できませんでした。")
  }
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

export const updateTodo = async (todo: TodoType) => {
  const ref = doc(db, "todos", todo.id);
  await updateDoc(ref, todo)
}

export const deleteTodo = async (id: string) => {
  const ref = doc(db, "todos", id);
  const result = await deleteDoc (ref);
  console.log("delete result:", result)
}