import React from 'react';
import base from 'paths.macro';

import { storiesOf } from '@storybook/react';

import Input from '../components/Input';

storiesOf(`${base}/Input`, module)
    .add('disabled', () => <Input disabled={true} placeholder="Placeholder" />)
    .add('enabled', () => <Input placeholder="Placeholder" />);
