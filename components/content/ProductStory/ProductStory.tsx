import styles from './ProductStory.module.scss';
import { ComponentProps } from '@uniformdev/canvas-react';
import Image from 'next/image';

type StoryBlockProps = ComponentProps<{
  introHeader?: string;
  header?: string;
  copy?: string;
}>;

export const ProductStory: React.FC<any> = ({ component }) => {
  const entry = component?.parameters?.entry?.value;
  const { title, tagLine, intro, backgroundImage, stories } = entry || {};
  const { src, alt } = backgroundImage || {};

  return (
    <div className={styles['story']}>
      <section className={styles['story__inner']}>
        <div className={styles['story__banner']}>
          {src && (
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover"
              loading="eager"
              quality="75"
              className={styles['story__img']}
            />
          )}
          {title && (
            <h2 className={styles['story__title']}>
              {tagLine && (
                <span
                  className={`${styles['story__tagline']} ${styles['story__tagline--spaced']}`}
                  dangerouslySetInnerHTML={{ __html: tagLine }}
                />
              )}
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </h2>
          )}
        </div>
        <div className={styles['story__container']}>
          <p className={styles['story__text']} dangerouslySetInnerHTML={{ __html: intro }} />
          <aside className={styles['story__supporting']}>
            {stories && stories.map((s, i) => <StoryBlock key={i} index={i + 1} {...s} />)}
          </aside>
        </div>
      </section>
    </div>
  );
};

const StoryBlock: React.FC<StoryBlockProps> = ({ header, introHeader, copy }) => (
  <section className={styles['story__card']}>
    <h3 className={styles['story__subtitle']}>
      <span className={styles['story__tagline']}>{introHeader}</span>
      {header}
    </h3>
    {copy && <div className={styles['story__text']} dangerouslySetInnerHTML={{ __html: copy }} />}
  </section>
);
