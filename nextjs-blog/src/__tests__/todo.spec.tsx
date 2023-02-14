import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import { RecoilRoot, RecoilValue, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import TodoListPage from '@app/pages/todo';
import { todoListState } from '@app/store/todo';
import { darkTheme } from '@app/styles/theme';

const RecoilObserver = ({ node, onChange }: { node: RecoilValue<unknown>; onChange: (value: unknown) => void }) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

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

  test('add new TODO item', () => {
    const onChange = jest.fn();

    render(
      <ThemeProvider theme={darkTheme}>
        <RecoilRoot>
          <RecoilObserver node={todoListState} onChange={onChange} />
          <TodoListPage />
        </RecoilRoot>
      </ThemeProvider>
    );

    act(() => {
      const inputComponent = screen.getByTestId('new-todo-item-text');
      fireEvent.change(inputComponent, { target: { value: 'Recoil' } });
      const btnComponent = screen.getByTestId('new-todo-item-btn');
      btnComponent.click();
    });

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith([]); // Initial state on render.

    const expectedNewItem = { id: 0, isComplete: false, text: 'Recoil' };
    expect(onChange).toHaveBeenCalledWith([expectedNewItem]); // New value on change.
  });

  // TODO: Testing Recoil state with asynchronous queries inside of a React component
  // https://recoiljs.org/docs/guides/testing/
});
