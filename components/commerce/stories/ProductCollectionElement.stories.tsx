import React from 'react';
import { ProductCollectionElement as ProductCollectionElementComponent } from '../ProductCollectionElement';

export default {
  title: 'commerce/Product Collection Element',
  component: ProductCollectionElementComponent,
  args: {
    variant: 'primary',
    name: 'Modena Take the Trails Shirt Fall 2021',
    description: '<p>Duis sed arcu varius, semper quam eget, venenatis eros. Aliquam tins.</p>',
    price: 99,
    images: [
      {
        id: 401,
        product_id: 155,
        is_thumbnail: false,
        sort_order: 2,
        description: '',
        image_file: 'r/043/woman_shirt_size3__09640.jpg',
        url_zoom:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/401/woman_shirt_size3__09640.1623084686.1280.1280.jpg?c=1',
        url_standard:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/401/woman_shirt_size3__09640.1623084686.386.513.jpg?c=1',
        url_thumbnail:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/401/woman_shirt_size3__09640.1623084686.220.290.jpg?c=1',
        url_tiny:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/401/woman_shirt_size3__09640.1623084686.44.58.jpg?c=1',
        date_modified: '2021-06-07T16:51:26+00:00',
      },
      {
        id: 402,
        product_id: 155,
        is_thumbnail: false,
        sort_order: 1,
        description: '',
        image_file: 'n/033/woman_shirt_size2__63137.jpg',
        url_zoom:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/402/woman_shirt_size2__63137.1623084686.1280.1280.jpg?c=1',
        url_standard:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/402/woman_shirt_size2__63137.1623084686.386.513.jpg?c=1',
        url_thumbnail:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/402/woman_shirt_size2__63137.1623084686.220.290.jpg?c=1',
        url_tiny:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/402/woman_shirt_size2__63137.1623084686.44.58.jpg?c=1',
        date_modified: '2021-06-07T16:51:26+00:00',
      },
      {
        id: 403,
        product_id: 155,
        is_thumbnail: true,
        sort_order: 0,
        description: '',
        image_file: 'i/149/woman_shirt_size1__79238.jpg',
        url_zoom:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/403/woman_shirt_size1__79238.1623084686.1280.1280.jpg?c=1',
        url_standard:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/403/woman_shirt_size1__79238.1623084686.386.513.jpg?c=1',
        url_thumbnail:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/403/woman_shirt_size1__79238.1623084686.220.290.jpg?c=1',
        url_tiny:
          'https://cdn11.bigcommerce.com/s-xqu7q0aniv/products/155/images/403/woman_shirt_size1__79238.1623084686.44.58.jpg?c=1',
        date_modified: '2021-06-07T16:51:26+00:00',
      },
    ],
  },
};

const Template = (args) => <ProductCollectionElementComponent {...args} />;
export const ProductCollectionElement = Template.bind({});
