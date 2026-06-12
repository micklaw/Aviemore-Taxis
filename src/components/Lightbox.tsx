import { useCallback, useEffect, useState } from 'react';

export interface GalleryImage {
  thumb: string;
  full: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
}

export default function Lightbox({ images }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta: number) => {
      setIndex((current) =>
        current === null
          ? null
          : (current + delta + images.length) % images.length,
      );
    },
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, close, step]);

  return (
    <>
      <div className="lightbox-grid">
        {images.map((image, i) => (
          <button
            key={image.full}
            type="button"
            className="lightbox-grid__item"
            onClick={() => setIndex(i)}
            aria-label={`View larger: ${image.alt}`}
          >
            <img src={image.thumb} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>
      {index !== null && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={images[index].alt}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-overlay__close"
            aria-label="Close"
            onClick={close}
          >
            ✕
          </button>
          <button
            type="button"
            className="lightbox-overlay__nav lightbox-overlay__nav--prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ‹
          </button>
          <img
            src={images[index].full}
            alt={images[index].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox-overlay__nav lightbox-overlay__nav--next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
