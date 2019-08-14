import React from 'react';
import Card from './Card'
import './List.css'

function List(props){
   // const headers = props.header;
   // const cardIds = props.cards;
   return (
      <section className='List'>
         <header className='List-header'>
            <h3>{props.header}</h3>
         </header>
         <div className='List-cards'>
            {props.cards.map(cur => 
               <Card 
                  key={cur.id}
                  title={cur.title}
                  content={cur.content}
               />
            )}
            <button type='button' className='List-add-button'>
               +Add More Stuff
            </button>
         </div>
      </section>
   )
}

export default List;