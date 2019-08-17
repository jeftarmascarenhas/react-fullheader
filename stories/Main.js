import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

import video from '../src/assets/video/demo.mp4';

storiesOf('FullHeader', module)
    .add('with title', () => {
        return <FullHeader title="TDD" />;
    })
    .add('with title and subtitle', () => {
        return <FullHeader title="TDD" subtitle="Na Prática" />;
    })
    .add('with title, subtitle, bgColor', () => {
        return (<FullHeader
            title="TDD"
            subtitle="Na Prática"
            bgColor="#3299BB"
        />);
    })
    .add('with title, subtitle, bgColor, textColor', () => {
        return (<FullHeader
            title="TDD"
            subtitle="Na Prática"
            bgColor="#3299BB"
            textColor="#FF9900"
        />);
    })
    .add('with title, subtitle, bgColor, textColor, font', () => {
        return (<FullHeader
            title="TDD"
            subtitle="Na Prática"
            bgColor="#3299BB"
            textColor="#FF9900"
            font="cursive"
        />);
    })
    .add('with title, subtitle', () => {
        <FullHeader
            title="TDD"
            subtitle="Na Prática"
            bgImg="http://www.htmldrive.net/edit_media/2011/201107/20110719/Full-background-webdevtuts/images/image1.jpg"
        />;
    })
    .add('with title, subtitle, video', () => {
        <FullHeader
            title="TDD"
            subtitle="Na Prática"
            bgColor="#3299BB"
            textColor="#FF9900"
            video={video}
        />;
    });
