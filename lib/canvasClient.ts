import { CanvasClient } from '@uniformdev/canvas';
import getConfig from 'next/config';

const {
  serverRuntimeConfig: { uniformApiKey, uniformProjectId, uniformApiHost },
} = getConfig();

export const canvasClient = new CanvasClient({
  apiHost: uniformApiHost,
  apiKey: uniformApiKey,
  projectId: uniformProjectId,
});
