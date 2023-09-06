import EditTodo from "@/app/components/EditTodo"

const EditTodoPage = ({ params }: { params: { id: string }}) => {
  return (
    <div>
      <h2 className="mt-8 text-center text-xl font-bold">Edit Todo</h2>
      <EditTodo id={params.id} />
    </div>
  )
}

export default EditTodoPage