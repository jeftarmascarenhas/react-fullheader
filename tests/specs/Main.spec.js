import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FullHeader from '../../src/Main';

describe('<FullHeader />', () => {
    it('should have header when mount', () => {
        const wrapper = shallow(<FullHeader />)
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('Title', () => {
        it('should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />)
            expect(wrapper.find('h1')).to.have.length(1)
        });
        it('should not have h1 tag when title not passed', () => {
            const wrapper = shallow(<FullHeader />)
            expect(wrapper.find('h1')).to.have.length(0)
        });
        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />)
            expect(wrapper.find('h1').props().children).to.be.equal('TDD')
        });
    });

    context('subtitle', () => {
        it('should have h2 tag with subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="TDD na Prática" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have h2 tag when subtitle not passed', () => {
            const wrapper = shallow(<FullHeader />)
            // expect(wrapper.find('h2')).to.have.length(0)
        });

        it('should h2 tag with then subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="TDD na Prática"/>)
            expect(wrapper.find('h2').props().children).to.be.equal('TDD na Prática')
        });
    });

    context('bgColor', () => {
        it('should have background-color equal #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD"/>);
            expect(wrapper).to.have.style('background-color').equal('#ccc')
        })
    })
});
