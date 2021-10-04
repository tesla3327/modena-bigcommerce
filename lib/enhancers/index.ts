import { compose, EnhancerBuilder } from '@uniformdev/canvas';
import getConfig from 'next/config';

import { CANVAS_CONTENTFUL_PARAMETER_TYPES } from '@uniformdev/canvas-contentful';
import { contentfulEnhancer } from './contentful/contentfulEnhancer';
import { contentfulModelConverter } from './contentful/contentfulModelConverter';

import { bigCommerceEnhancer } from './bigcommerce/bigCommerceEnhancer';
import { CANVAS_BIGCOMMERCE_PARAMETER_TYPES } from '@uniformdev/canvas-bigcommerce';
import { bigCommerceModelConverter } from './bigcommerce/bigCommerceModelConverter';

const { serverRuntimeConfig } = getConfig();
const { bigCommerceStoreHash, bigCommerceToken, contentfulSpaceId, contentfulDeliveryToken } =
  serverRuntimeConfig;

const contentfulConfigured: boolean =
  contentfulSpaceId !== undefined && contentfulDeliveryToken !== undefined;

const bigCommerceConfigured: boolean = bigCommerceStoreHash !== undefined && bigCommerceToken !== undefined;

console.warn(
  contentfulConfigured
    ? '✅  Contentful enhancer is configured and enabled.'
    : "⚠️   Contentful enhancer is not configured and therefore disabled. If that's unexpected, please check your env vars."
);

console.warn(
  bigCommerceConfigured
    ? '✅  BigCommerce enhancer is configured and enabled.'
    : "⚠️   BigCommerce enhancer is not configured and therefore disabled. If that's unexpected, please check your env vars."
);

export const enhancers = new EnhancerBuilder()
  .parameterType(
    CANVAS_CONTENTFUL_PARAMETER_TYPES,
    contentfulConfigured ? compose(contentfulEnhancer(), contentfulModelConverter) : undefined
  )
  .parameterType(
    CANVAS_BIGCOMMERCE_PARAMETER_TYPES,
    bigCommerceConfigured ? compose(bigCommerceEnhancer(), bigCommerceModelConverter) : undefined
  );
