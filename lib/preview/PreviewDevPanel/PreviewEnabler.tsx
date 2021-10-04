import useLivePreviewNextStaticProps from '../useLivePreviewNextStaticProps';
import getConfig from 'next/config';
import PreviewSwitch from './PreviewSwitch/PreviewSwitch';
import { RootComponentInstance } from '@uniformdev/canvas';

function PreviewEnabler({ preview, composition }: { preview?: string; composition: RootComponentInstance }) {
  const {
    publicRuntimeConfig: { previewEnabled },
  } = getConfig();

  useLivePreviewNextStaticProps({
    compositionId: composition?._id,
    projectId: preview,
  });

  return previewEnabled === 'true' ? <PreviewSwitch previewing={!!preview} /> : null;
}

export default PreviewEnabler;
