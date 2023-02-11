import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import TodoListPage from '@app/pages/todo';
import { darkTheme } from '@app/styles/theme';

describe('TodoListPage', () => {
  it('renders a heading', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <RecoilRoot>
          <TodoListPage />
        </RecoilRoot>
      </ThemeProvider>
    );

    const heading = screen.getByRole('heading', {
      name: /TODO/i,
    });

    const article = screen.getByTitle('TODO');

    expect(heading).toBeInTheDocument();
    expect(article).toBeInTheDocument();
  });
});
