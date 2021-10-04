import React from 'react';
import { Hero as HeroComponent } from '../Hero';

export default {
  title: 'Content/Hero',
  component: HeroComponent,
  args: {
    variant: 'primary',
    internalName: 'Default hero',
    verticalTitle: 'SPRING COLLECTION',
    header: 'Show your wild side.',
    shortCopy:
      'We are driven by the simple idea of making products that match our values and lifestyle choices.',
    image: {
      fields: {
        file: {
          url: '/images/concepts/Purple_Woman.png',
          details: { size: 224283, image: { width: 798, height: 1090 } },
          fileName: 'couple_hero 2.png',
          contentType: 'image/png',
        },
      },
    },
  },
  argTypes: {
    // color: {
    //   description: "Color of the text",
    //   control: "color",
    // },
  },
};

const Template = (args) => <HeroComponent entry={{ fields: { ...args } }}>Hello</HeroComponent>;
export const Hero = Template.bind({});
