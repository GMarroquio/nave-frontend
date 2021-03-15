import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<any>,
  isVisible: boolean,
  onClose: () => void
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    if (isVisible) {
      window.addEventListener('click', handleClick);
    }
    return () => {
      if (isVisible) {
        window.removeEventListener('click', handleClick);
      }
    };
  }, [isVisible, onClose, ref]);
};
