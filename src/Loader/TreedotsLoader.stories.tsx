import React from 'react';
import { TreedotsLoader, TreedotsLoaderProps } from './TreedotsLoader';

export default {
  title: 'Sample/TreedotsLoader',
  argTypes: {
    isLoading: { control: 'boolean' }
  },
};

export const TreedotsLoaderComponent = (arg: TreedotsLoaderProps) => <TreedotsLoader {...arg} />

TreedotsLoaderComponent.args = {
  isLoading: true,
};
