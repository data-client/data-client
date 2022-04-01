import { useSuspense } from 'rest-hooks';
import TodoResource from 'resources/TodoResource';

import TodoListItem from './TodoListItem';
import NewTodo from './NewTodo';

export default function TodoListComponent() {
  const todos = useSuspense(TodoResource.list(), {});

  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem key={todo.pk()} todo={todo} />
      ))}
      <NewTodo lastId={todos.length} />
    </div>
  );
}
