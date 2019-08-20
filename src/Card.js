import React from 'react';
import './Card.css'

class Card extends React.Component{
   constructor(props) {
      super(props);
   }
   render(){
      const { title } = this.props
      const { content } = this.props
      return(
         <div className='Card'>
            <button 
               onClick={() => this.props.onDeleteItem(title)}
               type='button'>
               delete
               </button>
            <h3>{title}</h3>
            <p>{content}</p>
         </div>
      )
   }
}
// function Card(props){
//    // const title = props.title;
//    // const content = props.content;
//    return (
//       <div className='Card'>
//          <button type='button'>delete</button>
//          <h3>{props.title}</h3>
//          <p>{props.content}</p>
//       </div>
//    )
// }

export default Card;