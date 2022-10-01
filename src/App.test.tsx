import React from 'react';
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
import App from './App';
import List from './components/List/List';
import { faker } from '@faker-js/faker';

const button = document.getElementById('add-button');
let container: HTMLElement = button as HTMLElement;
const items = [
  { id: 0, index: 'type 0', description:'item 1 rnadom word', price: 'item 1 random price' },
  { id: 1, index: 'type 1', description:'item 1 rnadom word', price: 'item 1 random price' },
  { id: 2, index: 'type 1', description:'item 1 rnadom word', price: 'item 1 random price' },
]

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

  test('render items array correctly', () => {
    expect(items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({  
          id: 0,
          index: 'type 0',
          description:'item 1 rnadom word',
          price: 'item 1 random price'
        })
      ])
    )
  })

  it('should contains', () => {
    const state = new Array(6).fill(null).map((_, i) => ({
      id: i,
      index: `Item ${i}`,
      description: `Item ${i} ${faker.random.word()}`,
      price: `Item ${i} ${faker.datatype.number(100000)}`
    }));

    const matchObj = new Array(state.length).fill(null).map((_, idx) => {
      const item = state[idx];
      const stateSlice = {
        id: item.id,
        index: item.index,
        description: item.description,
        price: item.price
      };
      return stateSlice;
    });
    expect(matchObj).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          index: expect.any(String),
          description: expect.any(String),
          price: expect.any(String)
        })
      ])
    );
    expect(state).toMatchObject(matchObj);
    expect(state).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          index: expect.any(String),
          description: expect.any(String),
          price: expect.any(String)
        })
      ])
    );
  });
})
