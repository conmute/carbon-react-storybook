import React from 'react';
import base from 'paths.macro';
import { action } from '@storybook/addon-actions';

import { storiesOf } from '@storybook/react';

import Button from '../components/Button';

storiesOf(`${base}/Dirname Example`, module)
  .add('story 1', () => <Button onClick={action('clicked')} label="Story 1" />)
  .add('story 2', () => <Button onClick={action('clicked')} label="Story 2" />);