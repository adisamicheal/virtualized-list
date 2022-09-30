import React, { useEffect, useState} from 'react';
import './App.css';
import List from './components/List/List';
import { faker } from '@faker-js/faker';


function App() {
  const [count, setCount] = useState(100000);
  const [items, setItems] = useState([]);
  const [scrollBackToTop, setScrollBackTOTop] = useState(false)

  const scrollToTop = (e) => {
    setScrollBackTOTop(!scrollBackToTop)
    setItems(...items)
  }

  useEffect(() => {
    setItems(
      new Array(count)
        .fill(null)
        .map((_, i) => ({id: i, index: `Item ${i}`, description: `Item ${i} ${faker.random.word()}`, price: `Item ${i} ${faker.datatype.number(100000)}` }))
    );

  }, [count, scrollBackToTop]);
  
  return (
    <div className="App">
      <header className="heading">
        <div className="empty-container"></div>
        <p>Virtualized list</p>
        <button id='add-button' data-testid='add-item-button' onClick={() => {setCount(parseInt(count + 1))}}>Add new item</button>
      </header>
      <div>
        <List numItems={items.length} itemHeight={40} windowHeight={400} renderItem={({ index, style }) => {
            const i = items[index];
            return (
              <div key={i.index} id={i.index} className="item" style={style}>
                <div style={{ display: 'flex', minWidth: '200px', minHeight: '40px', justifyContent: 'center', alignItems: 'center', border: '2px solid black'}}>
                  {i.index}
                </div>
                <div style={{ display: 'flex', minWidth: '200px', minHeight: '40px', justifyContent: 'center', alignItems: 'center', border: '2px solid black'}}>
                  {i.description}
                </div>
                <div style={{ display: 'flex', minWidth: '200px', minHeight: '40px', justifyContent: 'center', alignItems: 'center', border: '2px solid black'}}>
                  {i.price}
                </div>
              </div>
            );
        }}/>
      </div>
      <div className="footer">
        <button onClick={scrollToTop}>Scroll to top</button>
      </div>
    </div>
  );
}

export default App;
