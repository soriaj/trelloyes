import React from 'react';
import Card from './Card'
import './List.css'

class List extends React.Component{
   render(){
      const { header } = this.props
      const { cards } = this.props
      return (
         <section className='List'>
            <header className='List-header'>
               <h3>{header}</h3>
            </header>
            <div className='List-cards'>
               {cards.map(cur => 
                  <Card 
                     key={cur.id}
                     cardId={cur}
                     title={cur.title}
                     content={cur.content}
                     onDeleteItem={this.props.onDeleteItem}
                  />
               )}
               <button 
                  type='button' 
                  className='List-add-button'
                  onClick={() => this.props.onAddItem(this.props.listId)}
                  >
                  +Add More Stuff
               </button>
            </div>
         </section>
      )
   }
}

// function List(props){
//    console.log(props.cards)
//    // const headers = props.header;
//    // const cardIds = props.cards;
//    return (
      // <section className='List'>
      //    <header className='List-header'>
      //       <h3>{props.header}</h3>
      //    </header>
      //    <div className='List-cards'>
      //       {props.cards.map(cur => 
      //          <Card 
      //             key={cur.id}
      //             title={cur.title}
      //             content={cur.content}
      //          />
      //       )}
      //       <button type='button' className='List-add-button'>
      //          +Add More Stuff
      //       </button>
      //    </div>
      // </section>
//    )
// }

export default List;