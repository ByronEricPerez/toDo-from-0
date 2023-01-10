import { Input } from "../components/input/Input";
import { Title } from "../components/title/Title"
import { TodoList } from "../components/todoList/TodoList"

function Page() {
  return (
    <div className="App">
      <Title />
      <Input />
      <TodoList />
    </div>
  );
}

export default Page;