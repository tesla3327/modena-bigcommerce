import React from 'react';
import { FeaturedProduct as FeaturedProductComponent } from '../FeaturedProduct';
import { Story } from '@storybook/react';

const Template: Story<any> = (args) => (
  <FeaturedProductComponent product={{ ...args }} component={{ variant: args.variant }} />
);

export default {
  title: 'commerce/Featured Product',
  component: FeaturedProductComponent,
  argTypes: {
    variant: {
      title: { type: 'text' },
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};

export const PrimaryVariant = Template.bind({});
PrimaryVariant.args = {
  variant: 'primary',
  name: 'Modena Bag Fall 2021',
  description:
    '<p><span>Duis sed arcu varius, semper quam eget, venenatis eros. Aliquam tincidunt, justo eget ullamcorper finibus, justo arcu luctus felis, ut rhoncus leo turpis eu lectus.</span></p>',
  price: 299,
  images: [
    {
      id: 398,
      product_id: 154,
      is_thumbnail: false,
      sort_order: 2,
      description: '',
      image_file: 'n/500/woman_product_size3__40504.jpg',
      url_zoom:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/398/woman_product_size3__40504.1623084617.1280.1280.jpg?c=1',
      url_standard:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/398/woman_product_size3__40504.1623084617.386.513.jpg?c=1',
      url_thumbnail:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/398/woman_product_size3__40504.1623084617.220.290.jpg?c=1',
      url_tiny:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/398/woman_product_size3__40504.1623084617.44.58.jpg?c=1',
      date_modified: '2021-06-07T16:50:17+00:00',
    },
    {
      id: 399,
      product_id: 154,
      is_thumbnail: false,
      sort_order: 1,
      description: '',
      image_file: 'b/792/woman_product_size2__58652.jpg',
      url_zoom:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/399/woman_product_size2__58652.1623084617.1280.1280.jpg?c=1',
      url_standard:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/399/woman_product_size2__58652.1623084617.386.513.jpg?c=1',
      url_thumbnail:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/399/woman_product_size2__58652.1623084617.220.290.jpg?c=1',
      url_tiny:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/399/woman_product_size2__58652.1623084617.44.58.jpg?c=1',
      date_modified: '2021-06-07T16:50:17+00:00',
    },
    {
      id: 400,
      product_id: 154,
      is_thumbnail: true,
      sort_order: 0,
      description: '',
      image_file: 'w/645/woman_product_size1__96665.jpg',
      url_zoom:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/400/woman_product_size1__96665.1623084617.1280.1280.jpg?c=1',
      url_standard:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/400/woman_product_size1__96665.1623084617.386.513.jpg?c=1',
      url_thumbnail:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/400/woman_product_size1__96665.1623084617.220.290.jpg?c=1',
      url_tiny:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/400/woman_product_size1__96665.1623084617.44.58.jpg?c=1',
      date_modified: '2021-06-07T16:50:17+00:00',
    },
  ],
};

export const SecondaryVariant = Template.bind({});
SecondaryVariant.args = {
  variant: 'secondary',
  name: 'Modena Bag Summer 2021',
  description:
    '<p><span>Duis sed arcu varius, semper quam eget, venenatis eros. Aliquam tincidunt, justo eget ullamcorper finibus, justo arcu luctus felis, ut rhoncus leo turpis eu lectus.</span></p>',
  price: 299,
  images: [
    {
      id: 398,
      product_id: 154,
      is_thumbnail: false,
      sort_order: 2,
      description: '',
      image_file: 'n/500/woman_product_size3__40504.jpg',
      url_zoom:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/398/woman_product_size3__40504.1623084617.1280.1280.jpg?c=1',
      url_standard:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/398/woman_product_size3__40504.1623084617.386.513.jpg?c=1',
      url_thumbnail:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/398/woman_product_size3__40504.1623084617.220.290.jpg?c=1',
      url_tiny:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/398/woman_product_size3__40504.1623084617.44.58.jpg?c=1',
      date_modified: '2021-06-07T16:50:17+00:00',
    },
    {
      id: 399,
      product_id: 154,
      is_thumbnail: false,
      sort_order: 1,
      description: '',
      image_file: 'b/792/woman_product_size2__58652.jpg',
      url_zoom:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/399/woman_product_size2__58652.1623084617.1280.1280.jpg?c=1',
      url_standard:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/399/woman_product_size2__58652.1623084617.386.513.jpg?c=1',
      url_thumbnail:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/399/woman_product_size2__58652.1623084617.220.290.jpg?c=1',
      url_tiny:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/399/woman_product_size2__58652.1623084617.44.58.jpg?c=1',
      date_modified: '2021-06-07T16:50:17+00:00',
    },
    {
      id: 400,
      product_id: 154,
      is_thumbnail: true,
      sort_order: 0,
      description: '',
      image_file: 'w/645/woman_product_size1__96665.jpg',
      url_zoom:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/400/woman_product_size1__96665.1623084617.1280.1280.jpg?c=1',
      url_standard:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/400/woman_product_size1__96665.1623084617.386.513.jpg?c=1',
      url_thumbnail:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/400/woman_product_size1__96665.1623084617.220.290.jpg?c=1',
      url_tiny:
        'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/154/images/400/woman_product_size1__96665.1623084617.44.58.jpg?c=1',
      date_modified: '2021-06-07T16:50:17+00:00',
    },
  ],
};
