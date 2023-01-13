import { Input } from "../components/input/Input";
import { Title } from "../components/title/Title"
import { TodoList } from "../components/todoList/TodoList"

function Page() {
  return (
    <div className="flex justify-center bg-orange-300">
      <div className="flex flex-col bg-orange-300">
        <Title />
        <Input />
        <TodoList />
      </div>
    </div>
  );
}

export default Page;