import { ChangeEventHandler } from 'react';
import { useRecoilState } from 'recoil';

import { TodoListFilter } from '@app/domain/todo';
import { todoListFilterState } from '@app/store/todo';

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter: ChangeEventHandler<HTMLSelectElement> = ({ target: { value } }) => {
    setFilter(value as TodoListFilter);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
