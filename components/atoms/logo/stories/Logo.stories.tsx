import React from 'react';
import { Logo as LogoComponent } from '../logo';

export default {
  title: 'Atoms/Logo',
  component: LogoComponent,
  args: {
    variant: 'primary',
  },
};

const Template = (args) => <LogoComponent {...args} />;
export const Logo = Template.bind({});
