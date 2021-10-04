import React from 'react';
import { Basket as BasketComponent } from '../basket';

export default {
  title: 'Atoms/Basket',
  component: BasketComponent,
  args: {
    variant: 'primary',
    text: 'Click me',
    BasketType: 'primary',
  },
};

const Template = (args) => <BasketComponent {...args} />;
export const Basket = Template.bind({});
