export const colors = {
  // Primary Colors
  primary: '#D35400', // Burnt Orange - Main brand color
  secondary: '#F1C40F', // Golden Yellow - Secondary brand color
  
  // Text Colors
  text: {
    primary: '#333333', // Charcoal Gray - Main text
    secondary: '#666666', // Medium Gray - Secondary text
  },
  
  // Background Colors
  background: {
    primary: '#FFF4E6', // Cream - Main background
    white: '#FFFFFF', // Pure White - Card backgrounds
  },
  
  // Interactive States
  hover: {
    primary: '#D35400',
    text: '#FFF4E6',
  }
}

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem'
}

export const borderRadius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  full: '9999px'
}

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
}

export const transitions = {
  default: 'all 0.3s ease',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease'
}

// Common component styles
export const componentStyles = {
  button: {
    primary: `
      bg-[${colors.secondary}]
      text-[${colors.text.primary}]
      px-6 py-2
      rounded-md
      hover:bg-[${colors.hover.primary}]
      hover:text-[${colors.hover.text}]
      transition-colors
      shadow-md
      hover:shadow-lg
    `,
    secondary: `
      bg-transparent
      text-[${colors.text.primary}]
      hover:text-[${colors.primary}]
      font-medium
      transition-colors
    `
  },
  card: `
    bg-white
    rounded-lg
    shadow-md
    hover:shadow-lg
    transition-all
    duration-300
    overflow-hidden
  `,
  container: `
    max-w-7xl
    mx-auto
    px-4
    sm:px-6
    lg:px-8
  `
} 