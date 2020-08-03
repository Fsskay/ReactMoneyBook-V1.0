import React from 'react';
import {mount} from 'enzyme';
import MonthPicker from '../MonthPicker';


let props = {
    year: 2018,
    month: 8,
    onChange: jest.fn()
};

let wrapper;

descirbe('test MonthPicker component', () => {
    beforeEach(()=>{
        wrapper = mount(<MonthPicker {...props}/>)
    })
})