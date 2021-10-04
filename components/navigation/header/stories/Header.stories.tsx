import React from 'react';
import { Header as HeaderComponent } from '../header';

export default {
  title: 'Navigation/Header',
  component: HeaderComponent,
  args: {
    variant: 'primary',
  },
};

const Template = (args) => <HeaderComponent {...args} />;
export const Header = Template.bind({});
