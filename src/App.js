import React from 'react';
import List from './List';
import './App.css';

function App(props){
  // const listData = props.STORE.lists;
  // const cardData = props.STORE.allCards;
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Javiers Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {props.STORE.lists.map(cur => 
          <List
            key={cur.id}
            header={cur.header}
            cards={cur.cardIds.map(id => props.STORE.allCards[id])}
          />
        )}
      </div>
    </main>
  )
}

export default App;