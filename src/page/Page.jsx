import { Input } from "../components/input/Input";
import { Title } from "../components/title/Title"
import { TodoList } from "../components/todoList/TodoList"

function Page() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Title />
        <Input />
        <TodoList />
      </div>
    </div>
  );
}

export default Page;