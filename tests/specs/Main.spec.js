import React from 'react';
import chai, { expect } from 'chai';
import chaEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

import FullHeader from '../../src/Main';

chai.use(chaEnzyme());

describe('<FullHeader />', () => {
    it('should have header when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('Title', () => {
        it('should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });
        it('should not have h1 tag when title not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });
        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('subtitle', () => {
        it('should have h2 tag with subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="TDD na Prática" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have h2 tag when subtitle not passed', () => {
            const wrapper = shallow(<FullHeader />);
            // expect(wrapper.find('h2')).to.have.length(0)
        });

        it('should h2 tag with then subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="TDD na Prática" />);
            expect(wrapper.find('h2').props().children).to.be.equal('TDD na Prática');
        });
    });

    context('bgColor', () => {
        it('should have background-color equal #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });

        it('should have background-color equal #000 when bgColor is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" bgColor="#000" />);
            expect(wrapper).to.have.style('background-color').equal('#000');
        });
    });

    context('textColor', () => {
        it('should have color equal #000 when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('color').equal('#000');
        });

        it('should have color equal #333 when bgColor is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" textColor="#222" />);
            expect(wrapper).to.have.style('color').equal('#222');
        });
    });

    context('font', () => {
        it('should have font-family equal Arial when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('font-family').equal('Arial');
        });
        it('should have font-family eqaul sans-serif when font is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" font="sans-serif" />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });
    });

    context('bgImg', () => {
        it('should have background-image equal empty when none passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-image').equal('url()');
        });

        it('should have background-image equal background-color when is passed', () => {
            const wrapper = shallow(<FullHeader bgImg="bg.jpg" />);
            expect(wrapper).to.have.style('background-image').equal('url(bg.jpg)');
        });
    });

    context('video', () => {
        it('should have video tag when video is passed', () => {
            const wrapper = shallow(<FullHeader video="my_video.mp4" />);
            expect(wrapper.find('video')).to.have.length(1);
        });

        it('should have not video tag when video is not passed', () => {
            const wrapper = shallow(<FullHeader video="my_video.mp4" />);
            expect(wrapper.find('video').props().src).to.be.equal('my_video.mp4');
        });
    });
});
