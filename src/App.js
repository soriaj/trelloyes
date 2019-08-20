import React from 'react';
import List from './List';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }
  handleDeleteItem = (card) => {
    console.log(card.id)
    const { lists } = this.state
    const newCardIds = lists.map(cur => cur.cardIds.filter(ids => ids !== card.id))
    console.log(newCardIds)
  }
  render(){
    const { lists } = this.state
    const { allCards } = this.state
    return(
      <main className='App'>
        <header className='App-header'>
           <h1>Javiers Trelloyes!</h1>
       </header>
       <div className='App-list'>
          {lists.map(cur => 
          <List
            key={cur.id}
            header={cur.header}
            cards={cur.cardIds.map(id => allCards[id])}
            onDeleteItem={this.handleDeleteItem}
          />
          )}
        </div>
      </main>
    )
  }
}
// function App(props){
//   // const listData = props.STORE.lists;
//   // const cardData = props.STORE.allCards;
//   return (
//     <main className='App'>
//       <header className='App-header'>
//         <h1>Javiers Trelloyes!</h1>
//       </header>
//       <div className='App-list'>
//         {props.STORE.lists.map(cur => 
//           <List
//             key={cur.id}
//             header={cur.header}
//             cards={cur.cardIds.map(id => props.STORE.allCards[id])}
//           />
//         )}
//       </div>
//     </main>
//   )
// }

export default App;