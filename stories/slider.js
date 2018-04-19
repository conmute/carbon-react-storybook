import React from 'react';
import base from 'paths.macro';

import { storiesOf } from '@storybook/react';

import Slider from '../components/Slider';

storiesOf(`${base}/Slider`, module)
    .add('default', () => <Slider />)

