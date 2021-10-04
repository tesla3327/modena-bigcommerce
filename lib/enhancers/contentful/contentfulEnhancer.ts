import getConfig from 'next/config';
import { createContentfulEnhancer } from '@uniformdev/canvas-contentful';
import { createClient } from 'contentful';

const { serverRuntimeConfig } = getConfig();
const { contentfulSpaceId, contentfulDeliveryToken, contentfulPreviewToken } = serverRuntimeConfig;

const contentfulEnvironment = process.env.CONTENTFUL_ENVIRONMENT ?? 'master';

export const contentfulEnhancer = () => {
  if (!contentfulSpaceId) {
    throw new Error('CONTENTFUL_SPACE_ID env not set.');
  }

  if (!contentfulDeliveryToken) {
    throw new Error('CONTENTFUL_CDA_ACCESS_TOKEN env not set.');
  }

  if (!contentfulPreviewToken) {
    throw new Error('CONTENTFUL_CDA_ACCESS_TOKEN env not set.');
  }

  const client = createClient({
    space: contentfulSpaceId,
    environment: contentfulEnvironment,
    accessToken: contentfulDeliveryToken,
  });

  const previewClient = createClient({
    space: contentfulSpaceId,
    environment: contentfulEnvironment,
    accessToken: contentfulPreviewToken,
    host: 'preview.contentful.com',
  });

  return createContentfulEnhancer({
    client,
    previewClient,
    useBatching: true,
    createQuery: ({ defaultQuery }) => {
      return {
        ...defaultQuery,
        select: 'fields',
        include: 2,
      };
    },
  });
};
