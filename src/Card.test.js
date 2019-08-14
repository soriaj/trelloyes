import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Card from './Card';

describe('Cards component', () => {
   it('renders UI without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Card />, div);
      ReactDOM.unmountComponentAtNode(div);
	});
	
	it('renders the UI as expected with Snapshot', () => {
		const tree = TestRenderer.create(<Card title='First list' content='Some Content for Testing' />).toJSON();
		expect(tree).toMatchSnapshot();
	});

});