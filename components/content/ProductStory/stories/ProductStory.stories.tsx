import React from 'react';
import { ProductStory as ProductStoryComponent } from '../ProductStory';

export default {
  title: 'Content/Product Story',
  component: ProductStoryComponent,
  args: {
    variant: 'primary',
    title: 'Suspendisse at lacinia dui, quis posuere magna.',
    tagLine: 'Lorem ipsum dolor',
    intro:
      'Duis sed arcu varius, semper quam eget, venenatis eros. Aliquam tincidunt, justo eget ullamcorper finibus, justo arcu luctus felis, ut rhoncus leo turpis eu lectus. Suspendisse egestas lacinia rhoncus. Nam nec urna vestibulum, placerat enim eget, dapibus metus. Sed ultrices neque dignissim, accumsan neque ut, imperdiet enim.',
    backgroundImage: {
      fields: {
        file: {
          url: '/images/concepts/yellow_woman.jpg',
        },
      },
    },
    stories: [
      {
        fields: {
          internalName: 'Default story two',
          introHeader: 'First story block',
          header: 'Donec congue at neque nec egestas.',
          copy: 'Duis sed arcu varius, semper quam eget, venenatis eros. Aliquam tincidunt, justo eget ullamcorper finibus, justo arcu luctus felis, ut rhoncus leo turpis eu lectus.',
        },
      },
      {
        fields: {
          internalName: 'Default story three',
          introHeader: 'Second story block',
          header: 'Donec congue at neque nec egestas.',
          copy: 'Duis sed arcu varius, semper quam eget, venenatis eros. Aliquam tincidunt, justo eget ullamcorper finibus, justo arcu luctus felis, ut rhoncus leo turpis eu lectus.',
        },
      },
    ],
  },
};

const Template = (args) => <ProductStoryComponent entry={{ fields: { ...args } }} />;
export const ProductStory = Template.bind({});
