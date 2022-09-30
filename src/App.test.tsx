import React from 'react';
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
import App from './App';
import List from './components/List/List';

const button = document.getElementById('add-button');
let container: HTMLElement = button as HTMLElement;

const Button = ({onClick, children}: any) => (
  <button onClick={onClick}>{children}</button>
)

const IDMAPS = {
  ADD_BUTTON: 'add-item-button',
};


describe('VirtualizedList', () => {
  let renderApp: () => any;

  beforeAll(() => {
    renderApp = () => render(<App/>);
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('render List component', () => {
    const props = {
      renderItem: () => {}
    }
    const elem = (
      <List {...props} />
    )

    render(elem)
  })
})
