import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../styles/sphere.css';
import '../styles/globals.css';
import normalMap from './assets/normal-map.png';

import Sphere from '../pages/components/sphere';


export default {
  title: 'Components/Sphere',
  component: Sphere,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sphere>;

/**
 * A sphere with some mouse interactions
 */
export const FeelTheSphere = () => {
  return (
    <Sphere texture={normalMap} />
  );
};
