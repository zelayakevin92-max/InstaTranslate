export const lightTheme = {
  colors: {
    primary: '#E8622A',
    background: '#0A0A0A',
    surface: '#1E1E1E',
    text: '#F5F5F5',
    textSecondary: '#AAAAAA',
    success: '#1D9E75',
    warning: '#EF9F27',
    danger: '#E24B4A',
    border: '#2E2E2E',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: '700',
      lineHeight: 40,
    },
    h2: {
      fontSize: 24,
      fontWeight: '700',
      lineHeight: 32,
    },
    h3: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 28,
    },
    body: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
    },
    captionSmall: {
      fontSize: 11,
      fontWeight: '400',
      lineHeight: 14,
    },
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  minTouchTarget: 48,
} as const;

export type Theme = typeof lightTheme;