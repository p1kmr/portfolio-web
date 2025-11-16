/**
 * Motion utilities for respecting user preferences
 * Supports prefers-reduced-motion media query
 */

/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get animation variants that respect reduced motion preference
 * @param {object} normalVariants - Normal animation variants
 * @param {object} reducedVariants - Reduced motion variants (optional)
 * @returns {object}
 */
export const getAccessibleVariants = (normalVariants, reducedVariants = {}) => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      ...reducedVariants
    }
  }
  return normalVariants
}

/**
 * Get transition settings that respect reduced motion preference
 * @param {object} normalTransition - Normal transition settings
 * @returns {object}
 */
export const getAccessibleTransition = (normalTransition) => {
  if (prefersReducedMotion()) {
    return { duration: 0.01 }
  }
  return normalTransition
}

/**
 * Animation variants with reduced motion support
 */
export const accessibleVariants = {
  // Fade in
  fadeIn: {
    normal: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    reduced: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  },

  // Slide up
  slideUp: {
    normal: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    reduced: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  },

  // Scale
  scale: {
    normal: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    reduced: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  },

  // Slide in from left
  slideLeft: {
    normal: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    reduced: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  }
}

/**
 * Get variant based on user preference
 * @param {string} variantName - Name of the variant
 * @returns {object}
 */
export const getVariant = (variantName) => {
  const variant = accessibleVariants[variantName]
  if (!variant) return accessibleVariants.fadeIn.normal

  return prefersReducedMotion() ? variant.reduced : variant.normal
}

export default {
  prefersReducedMotion,
  getAccessibleVariants,
  getAccessibleTransition,
  getVariant,
  accessibleVariants
}
