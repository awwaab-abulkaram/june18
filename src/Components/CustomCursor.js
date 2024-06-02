import { useEffect } from 'react';
import './CustomCursor.css'

function CustomCursor() {
  useEffect(() => {
    const handleMouseEnter = () => {
      const siteWideCursor = document.querySelector('.custom-cursor.site-wide');
      if (siteWideCursor) {
        siteWideCursor.style.display = 'block';
      }
    };

    const handleMouseLeave = () => {
      const siteWideCursor = document.querySelector('.custom-cursor.site-wide');
      if (siteWideCursor) {
        siteWideCursor.style.display = 'none';
      }
    };

    const handleMouseMove = (evt) => {
      const siteWideCursor = document.querySelector('.custom-cursor.site-wide');
      if (siteWideCursor) {
        const w = siteWideCursor.clientWidth;
        const h = siteWideCursor.clientHeight;
        siteWideCursor.style.transform = `translate(${evt.clientX - w / 2}px, ${evt.clientY - h / 2}px)`;
      }
    };

    const handleMouseDown = () => {
      const siteWideCursor = document.querySelector('.custom-cursor.site-wide');
      if (siteWideCursor) {
        siteWideCursor.classList.add('active');
      }
    };

    const handleMouseUp = () => {
      const siteWideCursor = document.querySelector('.custom-cursor.site-wide');
      if (siteWideCursor) {
        siteWideCursor.classList.remove('active');
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return null; // Render nothing, as the cursor is handled outside of React
}

export default CustomCursor;
