import { ComponentType } from 'react';
import { ComponentInstance } from '@uniformdev/canvas';
import { DefaultNotImplementedComponent, ComponentProps } from '@uniformdev/canvas-react';

import { Hero, ProductStory, ProductSpecs } from '@/components/content';

import {
  ProductCollectionContainer,
  FeaturedProduct,
  ProductCollectionElement,
  ProductCollectionList,
} from 'components/commerce';

import { Footer, Header } from 'components/navigation';

const mappings: ComponentMapping = {
  header: Header,
  footer: Footer,
  hero: Hero,
  story: ProductStory,
  featuredProduct: FeaturedProduct,
  productCollectionContainer: ProductCollectionContainer,
  accordion: ProductSpecs,
  productCollectionItem: ProductCollectionElement,
  productCollectionList: ProductCollectionList,
};

type ComponentMapping = Record<string, ComponentType<any>>;

export function resolveRenderer(component: ComponentInstance): ComponentType<ComponentProps<any>> | null {
  const componentImpl = mappings[component.type];
  return componentImpl ? componentImpl : DefaultNotImplementedComponent;
}

export default mappings;
