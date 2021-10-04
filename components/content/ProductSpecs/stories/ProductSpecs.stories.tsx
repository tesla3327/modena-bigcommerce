import React from 'react';
import { ProductSpecs as ProductSpecsComponent } from '../ProductSpecs';

export default {
  title: 'Content/ProductSpecs',
  component: ProductSpecsComponent,
  args: {
    variant: 'primary',
    internalName: 'Default benefits',
    smallIntroHeader: 'BENEFITS',
    header: 'This product has amazing benefits',
    benefits: [
      {
        fields: {
          internalName: 'Communitities not shareholders',
          header: 'Communitities not shareholders',
          copy: 'Nunc egestas dolor vel volutpat rutrum. In viverra commodo metus, semper sagitti.',
        },
      },
      {
        fields: {
          internalName: 'Clothes that match your values',
          header: 'Clothes that match your values',
          copy: 'Nunc egestas dolor vel volutpat rutrum. In viverra commodo metus,',
        },
      },
      {
        fields: {
          internalName: 'simple not complicated',
          header: 'Simple, not complicated',
          copy: 'Nunc egestas dolor vel volutpat rutrum. In viverra commodo metus, semper sagittis sem rutrum quis. Duis lectus odio, tristique ac nunc nec, tempus vestibulum leo. Proin convallis faucibus mi, et efficitur lectus sollicitudin id. Etiam aliquet, risus in venenatis eleifend, diam magna placerat augue, sed ornare sem libero eget purus.',
        },
      },
      {
        fields: {
          internalName: 'Durable not disposable',
          header: 'Durable, not disposable',
          copy: 'Nunc egestas dolor vel volutpat rutrum. In viverra commodo metus, semper sagittis sem rutrum quis. Duis lectus odio, tristique ac nunc nec, tempus vestibulum leo. Proin convallis faucibus mi, et efficitur lectus sollicitudin id. Etiam aliquet, risus in venenatis eleifend, diam magna placerat augue, sed ornare sem libero eget purus.',
        },
      },
    ],
  },
};

const Template = (args) => <ProductSpecsComponent entry={{ fields: { ...args } }} />;
export const ProductSpecs = Template.bind({});
