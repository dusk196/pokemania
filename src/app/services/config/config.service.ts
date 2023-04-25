import { Injectable } from '@angular/core';
import { StateService } from 'src/app/services/state/state.service';
import { Observable } from 'rxjs';

export class Todo {
  id?: number;
}

interface TodoState {
  todos: Todo[];
  selectedTodoId: number;
}

const initialState: TodoState = {
  todos: [],
  selectedTodoId: 0
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends StateService<TodoState>{

  constructor() {
    super(initialState);
  }

  todos$: Observable<Todo[]> = this.select(state => state.todos);

  selectedTodo$: Observable<Todo | undefined> = this.select((state) => {
    return state.todos.find((item) => item.id === state.selectedTodoId);
  });

  addTodo(todo: Todo) {
    this.setState({ todos: [...this.state.todos, todo] })
  }

  selectTodo(todo: Todo) {
    this.setState({ selectedTodoId: todo.id });
  }

}
