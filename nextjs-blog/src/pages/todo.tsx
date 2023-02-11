import Head from 'next/head';

import Layout from '@app/components/layout.component/layout.component';
import { TodoList } from '@app/components/todo.component';
import utilStyles from '@app/styles/utils.module.css';

export default function TodoListPage() {
  return (
    <Layout>
      <Head>
        <title>TODO List</title>
      </Head>
      <article title="TODO">
        <h1 className={utilStyles.headingXl}>TODO</h1>
        <TodoList />
      </article>
    </Layout>
  );
}
