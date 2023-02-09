import Head from 'next/head';
import { useRecoilValue } from 'recoil';

import DateComponent from '@common/components/date';

import Layout from '@app/components/layout.component/layout.component';
import { TodoItemComponent, TodoItemCreator, TodoListFilters, TodoListStats } from '@app/components/todo.component';
import { filteredTodoListState } from '@app/store/todo';
import utilStyles from '@app/styles/utils.module.css';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const now = new Date().toISOString();

  return (
    <Layout>
      <Head>
        <title>TODO</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>TODO</h1>
        <div className={utilStyles.lightText}>
          <DateComponent dateString={now} />
        </div>
        <div>
          <TodoListStats />
          <TodoListFilters />
          <TodoItemCreator />

          {todoList.map((todoItem) => (
            <TodoItemComponent key={todoItem.id} item={todoItem} />
          ))}
        </div>
      </article>
    </Layout>
  );
}
