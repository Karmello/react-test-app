import React from 'react';
import { shallow } from 'enzyme';

import { CircularProgress } from 'material-ui/Progress';

import Loader from 'js/components/Loader/Loader';


it('renders without crashing', () => {
  
  const loader = shallow(<Loader>content</Loader>);
  expect(loader.contains(<div>content</div>)).toEqual(true);
});

it('renders without crashing', () => {

  const loader = shallow(<Loader isShown>content</Loader>);
  
  expect(loader.contains(
    <div className='Loader'>
      <CircularProgress />
    </div>
  )).toEqual(true);
});