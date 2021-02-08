import React from 'react';
import { withKnobs, text, boolean, select, radios } from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  decorators: [withKnobs],
};

export const ButtonComponent = () =>
  <Button
    label={text('label', 'テキスト')}
    onClick={() => { }}
    disabled={boolean('disabled', false)}
    baseColor={radios('base color', { black: '#444', tomato: 'tomato', skyblue: 'skyblue' }, '#444')}
    pressColor={radios('press color', { lime: 'lime', orange: 'orange' }, 'lime')}
  />;
