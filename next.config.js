module.exports = {
  serverRuntimeConfig: {
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentfulEnvironment: process.env.CONTENTFUL_ENVIRONMENT,
    contentfulPreviewToken: process.env.CONTENTFUL_CPA_ACCESS_TOKEN,
    contentfulDeliveryToken: process.env.CONTENTFUL_CDA_ACCESS_TOKEN,
    // note: we only define UNIFORM_CLI_BASE_URL in development.
    // In production, it can be undefined and `uniformApiHost` will default to uniform.app
    // in the Canvas client.
    uniformApiHost: process.env.UNIFORM_CLI_BASE_URL || 'https://uniform.app',
    uniformApiKey: process.env.UNIFORM_API_KEY,
    uniformProjectId: process.env.UNIFORM_PROJECT_ID,
    bigCommerceStoreHash: process.env.BIGCOMMERCE_STORE_HASH,
    bigCommerceToken: process.env.BIGCOMMERCE_TOKEN,
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET || 'modena',
  },
  images: {
    loader: 'cloudinary',
    domains: ['res.cloudinary.com'],
    path: 'https://res.cloudinary.com/uniformdev/image/fetch',
  },
  publicRuntimeConfig: {
    gaTrackingId: process.env.GA_UA_ID || '',
  },
  trailingSlash: true,
};
