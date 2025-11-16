import { Global } from '@emotion/react'

/**
 * Global focus styles for better accessibility
 * Ensures all interactive elements have visible focus indicators
 */
const FocusStyles = () => (
  <Global
    styles={`
      /* Enhanced focus indicators for better accessibility */
      *:focus {
        outline: none;
      }

      *:focus-visible {
        outline: 3px solid #14b8a6;
        outline-offset: 2px;
        border-radius: 4px;
      }

      /* Specific focus styles for buttons */
      button:focus-visible,
      a:focus-visible {
        outline: 3px solid #14b8a6;
        outline-offset: 3px;
      }

      /* Focus styles for inputs */
      input:focus-visible,
      textarea:focus-visible,
      select:focus-visible {
        outline: 2px solid #6366f1;
        outline-offset: 2px;
      }

      /* Skip link */
      .skip-link:focus {
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 9999;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        * {
          border-color: currentColor !important;
        }
      }

      /* Ensure text is selectable */
      .selectable {
        user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
      }
    `}
  />
)

export default FocusStyles
