import React from 'react';
// @ts-ignore
import { ComponentMeta } from '@storybook/react';
import '../styles/sphere.css';
import '../styles/globals.css';
import texture from './assets/normal-map.png';
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
    <Sphere texture={texture} />
  );
};
