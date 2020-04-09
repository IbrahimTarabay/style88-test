import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPage } from './collection';
import CollectionItem from '../../components/collection-item/collection-item';

describe('CollectionPage', () => {
  let wrapper;
  let mockItems = [{ id: 1 ,name:'ahmed'}, { id: 2,name:'amr' }, { id: 3,name:'smi' }];
  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Test'
    };
       
    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  it('should render the CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the same number of CollectionItems as collection array', () => {
    const mockFilteredCollection = mockItems.filter(item =>{
      return item.name.toLowerCase().includes('a')})

    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
    expect(mockFilteredCollection.length).toBe(2);
  });
});