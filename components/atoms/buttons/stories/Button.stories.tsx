import React from 'react';
import { Button as ButtonComponent } from '../button';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  args: {
    variant: 'primary',
    text: 'Click me',
    buttonType: 'primary',
  },
};

const Template = (args) => <ButtonComponent {...args} />;
export const Button = Template.bind({});
