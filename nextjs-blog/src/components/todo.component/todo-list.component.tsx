import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { filteredTodoListState } from '@app/store/todo';

import TodoItemCreator from './todo-item-creator.component';
import TodoItem from './todo-item.component';
import TodoListFilters from './todo-list-filter.component';
import TodoListStats from './todo-stats.component';

const StyledUl = styled.ul`
  padding: 0;
`;

export default function TodoListComponent() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />

      <TodoItemCreator />

      <StyledUl>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </StyledUl>

      <TodoListFilters />
      <br />
      <br />
      <br />
    </>
  );
}
