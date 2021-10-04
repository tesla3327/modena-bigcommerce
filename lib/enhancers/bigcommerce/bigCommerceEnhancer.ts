import getConfig from 'next/config';
import {
  createBigCommerceClient,
  createBigCommerceEnhancer,
  parameterIsBigCommerceProduct,
  parameterIsBigCommerceProductList,
  parameterIsBigCommerceProductQuery,
} from '@uniformdev/canvas-bigcommerce';

const { serverRuntimeConfig } = getConfig();
const { bigCommerceStoreHash, bigCommerceToken } = serverRuntimeConfig;

export const bigCommerceEnhancer = () => {
  if (!bigCommerceStoreHash) {
    throw new Error('BIGCOMMERCE_STORE_HASH env not set.');
  }

  if (!bigCommerceToken) {
    throw new Error('BIGCOMMERCE_TOKEN env not set.');
  }

  const defaultEnhancer = createBigCommerceEnhancer({
    client: createBigCommerceClient({
      storeHash: bigCommerceStoreHash,
      token: bigCommerceToken,
    }),
    createProductOptions: ({ parameter }) => {
      return {
        include_fields: ['id', 'name', 'price', 'description'],
      };
    },
    createProductQueryOptions: () => {
      return {
        include_fields: ['id', 'name', 'price', 'description'],
      };
    },
  });

  // `enhancedEnhancer` is used to return empty product definition if no products are selected
  // in Uniform Canvas for a given parameter.
  const enhancedEnhancer: typeof defaultEnhancer = {
    ...defaultEnhancer,
    enhanceOne: async ({ parameter, parameterName, component, context }) => {
      if (parameterIsBigCommerceProduct(parameter) && !parameter.value) {
        return emptyProduct;
      } else if (
        parameterIsBigCommerceProductList(parameter) &&
        (!parameter.value || (Array.isArray(parameter.value) && parameter.value.length === 0))
      ) {
        return [emptyProduct, emptyProduct, emptyProduct];
      } else if (parameterIsBigCommerceProductQuery(parameter) && !parameter.value) {
        return [emptyProduct, emptyProduct, emptyProduct];
      }

      return await defaultEnhancer.enhanceOne({ parameter, parameterName, component, context });
    },
  };

  return enhancedEnhancer;
};

const emptyProduct: BigCommerceProduct = {
  name: 'Your product goes here',
  description: '',
  price: 100000000,
  images: [
    {
      url_zoom: 'https://via.placeholder.com/1000x430',
    },
  ],
  weight: 0,
  type: 'digital',
};

type BigCommerceProduct = Awaited<
  ReturnType<ReturnType<typeof createBigCommerceClient>['getProduct']>
>['product'];

// https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#recursive-conditional-types
type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
