import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const ANIMATION_DURATION = 250;

export default function ImageViewer({
  src,
  alt,
  className,
  style,
  children,
}: Props) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [_, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(0);

  const close = useCallback(() => {
    setAnimating(true);
    setVisible(false);
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      setAnimating(false);
    }, ANIMATION_DURATION);
  }, []);

  const openViewer = useCallback(() => {
    setOpen(true);
    setAnimating(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVisible(true);
        setTimeout(() => setAnimating(false), ANIMATION_DURATION);
      });
    });
  }, []);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      {children ? (
        <div
          className={className}
          style={{ ...style, cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
            openViewer();
          }}
        >
          {children}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          style={{
            ...style,
            cursor: "pointer",
            position: "relative",
            zIndex: 1,
          }}
          onClick={(e) => {
            e.stopPropagation();
            openViewer();
          }}
        />
      )}

      {open &&
        createPortal(
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity ${ANIMATION_DURATION}ms ease`,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none z-[101] p-2"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={src}
              alt={alt}
              style={{
                transform: visible ? "scale(1)" : "scale(0.9)",
                opacity: visible ? 1 : 0,
                transition: `transform ${ANIMATION_DURATION}ms ease, opacity ${ANIMATION_DURATION}ms ease`,
              }}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
