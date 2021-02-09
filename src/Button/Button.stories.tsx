import React from 'react';
import { withKnobs, text, boolean, select, radios } from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  decorators: [withKnobs],
  argTypes: {
    label: { control: 'text' },
    baseColor: { control: 'color' },
    pressColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const ButtonComponent = (arg) =>
  <Button
    label={text('label', 'テキスト')}
    onClick={() => { }}
    disabled={boolean('disabled', false)}
    baseColor={radios('base color', { black: '#444', tomato: 'tomato', skyblue: 'skyblue' }, '#444')}
    pressColor={radios('press color', { lime: 'limegreen', orange: 'orange' }, 'lime')}
    {...arg}
  />;

ButtonComponent.args = {
  label: 'Button',
};

export const lime = ButtonComponent.bind({});
lime.args = {
  label: 'LIME',
  baseColor: 'limegreen',
  pressColor: 'lime'
};
export const tomato = ButtonComponent.bind({});
tomato.args = {
  label: 'TOMATO',
  baseColor: 'tomato',
  pressColor: 'orange'
};