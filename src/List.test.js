import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import List from './List';

describe('Lists component', () => {
   const myList = [{
         id: '1',
         header: 'First list',
         cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]
   }];

   const myTestCards = 
      [
         { id: 'a', title: 'First card', content: 'lorem ipsum' },
         { id: 'b', title: 'Second card', content: 'lorem ipsum' },
         { id: 'c', title: 'Third card', content: 'lorem ipsum' }
      ];

   it('renders UI without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List cards={myTestCards} />, div);
      ReactDOM.unmountComponentAtNode(div);
   });

   // it('renders the UI as expected with Snapshot', () => {
	// 	const tree = TestRenderer.create(<List header={myList.header} cards={myTestCards} />).toJSON();
	// 	expect(tree).toMatchSnapshot();
	// });
});