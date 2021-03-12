import React from 'react';
import { Header,HeaderProps } from './Header';

export default {
  title: 'Sample/Header',
  argTypes: {
  },
};

export const HeaderComponent = (arg: HeaderProps) => <Header>タイトル</Header>
HeaderComponent.args = {

};
