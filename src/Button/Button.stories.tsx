import React from 'react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Sample/Button',
  argTypes: {
    label: { control: 'text' },
    onClick: () => { },
    baseColor: { control: 'color' },
    pressColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const ButtonComponent = (arg: ButtonProps) => <Button {...arg} />;

ButtonComponent.args = {
  label: 'Buttonnnn',
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