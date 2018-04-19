import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import Container from './Container';

addDecorator(story => <Container story={story} />);
setAddon(infoAddon);

const req = require.context('../stories/', true, /\.jsx?$/)

function loadStories() {
    // const req = require.context('../src/components', true, /\-story\.js$/);
    // req.keys().forEach(filename => req(filename));
    req.keys().forEach(req)
}

configure(loadStories, module);

// import { configure } from '@storybook/react';

// const req = require.context('../stories/', true, /\.jsx?$/)

// function loadStories() {
//     req.keys().forEach(req)
// }

// configure(loadStories, module);
