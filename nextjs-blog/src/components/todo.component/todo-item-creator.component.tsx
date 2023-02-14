import { ChangeEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { Button } from '@app/common/components/button';
import { TextInput } from '@app/common/components/textInput';
import { todoListState } from '@app/store/todo';

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

export default function TodoItemCreatorComponent() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <span>
      <TextInput
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="Enter new todo"
        data-testid="new-todo-item-text"
      />
      <Button data-testid="new-todo-item-btn" onClick={addItem}>
        Add
      </Button>
    </span>
  );
}
