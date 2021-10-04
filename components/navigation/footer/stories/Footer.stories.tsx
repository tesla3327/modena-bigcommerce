import React from 'react';
import { Footer as FooterComponent } from '../footer';

export default {
  title: 'Navigation/Footer',
  component: FooterComponent,
  args: {
    variant: 'primary',
  },
};

const Template = (args) => <FooterComponent {...args} />;
export const Footer = Template.bind({});
