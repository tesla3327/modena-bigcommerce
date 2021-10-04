import { RootComponentInstance } from '@uniformdev/canvas';

import CompositionPreview from './CompositionPreview/CompositionPreview';
import PreviewEnabler from './PreviewEnabler';

import styles from './PreviewDevPanel.module.scss';
import { RefObject } from 'react';

function PreviewDevPanel({
  preview,
  composition,
  containerRef,
}: {
  preview?: string;
  composition: RootComponentInstance;
  containerRef: RefObject<HTMLElement>;
}) {
  return (
    <div className={styles['panel']}>
      <div className={styles['preview-switch']}>
        <PreviewEnabler preview={preview} composition={composition} />
      </div>
      {/* {process.env.NODE_ENV === "development" && ( */}
      <div className={styles['composition-preview']}>
        <CompositionPreview containerRef={containerRef} composition={composition} />
      </div>
      {/* )} */}
    </div>
  );
}

export default PreviewDevPanel;
