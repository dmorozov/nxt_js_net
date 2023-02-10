import { ChangeEventHandler } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { Button } from '@app/common/components/button';
import { TextInput } from '@app/common/components/textInput';
import { todoListState } from '@app/store/todo';

import { ToDoItem } from '../../domain/todo';

const StyledList = styled.li`
  list-style: none;
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px;
`;

export default function TodoItemComponent({ item }: { item: ToDoItem }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <StyledList>
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
      <TextInput type="text" value={item.text} onChange={editItemText} />
      <Button type="button" onClick={deleteItem}>
        Delete
      </Button>
    </StyledList>
  );
}

function replaceItemAtIndex(arr: ToDoItem[], index: number, newValue: ToDoItem) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: ToDoItem[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
