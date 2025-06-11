import { defineTokens } from '@chakra-ui/react';

export const colors = defineTokens.colors({
  transparent: {
    value: 'transparent',
  },
  current: {
    value: 'currentColor',
  },
  black: {
    value: '#09090B',
  },
  white: {
    value: '#FFFFFF',
  },
  whiteAlpha: {
    '50': {
      value: 'rgba(255, 255, 255, 0.04)',
    },
    '100': {
      value: 'rgba(255, 255, 255, 0.06)',
    },
    '200': {
      value: 'rgba(255, 255, 255, 0.08)',
    },
    '300': {
      value: 'rgba(255, 255, 255, 0.16)',
    },
    '400': {
      value: 'rgba(255, 255, 255, 0.24)',
    },
    '500': {
      value: 'rgba(255, 255, 255, 0.36)',
    },
    '600': {
      value: 'rgba(255, 255, 255, 0.48)',
    },
    '700': {
      value: 'rgba(255, 255, 255, 0.64)',
    },
    '800': {
      value: 'rgba(255, 255, 255, 0.80)',
    },
    '900': {
      value: 'rgba(255, 255, 255, 0.92)',
    },
    '950': {
      value: 'rgba(255, 255, 255, 0.95)',
    },
  },
  blackAlpha: {
    '50': {
      value: 'rgba(0, 0, 0, 0.04)',
    },
    '100': {
      value: 'rgba(0, 0, 0, 0.06)',
    },
    '200': {
      value: 'rgba(0, 0, 0, 0.08)',
    },
    '300': {
      value: 'rgba(0, 0, 0, 0.16)',
    },
    '400': {
      value: 'rgba(0, 0, 0, 0.24)',
    },
    '500': {
      value: 'rgba(0, 0, 0, 0.36)',
    },
    '600': {
      value: 'rgba(0, 0, 0, 0.48)',
    },
    '700': {
      value: 'rgba(0, 0, 0, 0.64)',
    },
    '800': {
      value: 'rgba(0, 0, 0, 0.80)',
    },
    '900': {
      value: 'rgba(0, 0, 0, 0.92)',
    },
    '950': {
      value: 'rgba(0, 0, 0, 0.95)',
    },
  },
  brand: {
    '50': {
      value: '#eff3ff',
    },
    '100': {
      value: '#dae4ff',
    },
    '200': {
      value: '#bed0ff',
    },
    '300': {
      value: '#91b2ff',
    },
    '400': {
      value: '#5e8afc',
    },
    '500': {
      value: '#3860f9',
    },
    '600': {
      value: '#223fee',
    },
    '700': {
      value: '#1a2cdb',
    },
    '800': {
      value: '#1c25b1',
    },
    '900': {
      value: '#1c268c',
    },
    '950': {
      value: '#161955',
    },
  },
  gray: {
    50: {
      value: '#f8fafc',
    },
    100: {
      value: '#f1f5f9',
    },
    200: {
      value: '#e2e8f0',
    },
    300: {
      value: '#cbd5e1',
    },
    400: {
      value: '#94a3b8',
    },
    500: {
      value: '#64748b',
    },
    600: {
      value: '#475569',
    },
    700: {
      value: '#334155',
    },
    800: {
      value: '#1e293b',
    },
    '900': {
      value: '#0f172a',
    },
    '950': {
      value: '#0f172a',
    },
  },
  danger: {
    '50': {
      value: '#fef2f2',
    },
    '100': {
      value: '#fee2e2',
    },
    '200': {
      value: '#fecaca',
    },
    '300': {
      value: '#fca5a5',
    },
    '400': {
      value: '#f87171',
    },
    '500': {
      value: '#ef4444',
    },
    '600': {
      value: '#dc2626',
    },
    '700': {
      value: '#b91c1c',
    },
    '800': {
      value: '#991b1b',
    },
    '900': {
      value: '#7f1d1d',
    },
    '950': {
      value: '#450a0a',
    },
  },
  warning: {
    '50': {
      value: '#fef9e8',
    },
    '100': {
      value: '#fef0c3',
    },
    '200': {
      value: '#fee28a',
    },
    '300': {
      value: '#fdd147',
    },
    '400': {
      value: '#fac215',
    },
    '500': {
      value: '#eab308',
    },
    '600': {
      value: '#ca9a04',
    },
    '700': {
      value: '#a17c07',
    },
    '800': {
      value: '#85680e',
    },
    '900': {
      value: '#715a12',
    },
    '950': {
      value: '#423306',
    },
  },
  info: {
    '50': {
      value: '#ecfdf7',
    },
    '100': {
      value: '#d1faec',
    },
    '200': {
      value: '#a7f3da',
    },
    '300': {
      value: '#6ee7bf',
    },
    '400': {
      value: '#34d39e',
    },
    '500': {
      value: '#10b981',
    },
    '600': {
      value: '#059666',
    },
    '700': {
      value: '#047852',
    },
    '800': {
      value: '#065f42',
    },
    '900': {
      value: '#064e36',
    },
    '950': {
      value: '#022c1e',
    },
  },
  success: {
    '50': {
      value: '#e9fff7',
    },
    '100': {
      value: '#caffea',
    },
    '200': {
      value: '#9bffdb',
    },
    '300': {
      value: '#5bfacb',
    },
    '400': {
      value: '#13ebb2',
    },
    '500': {
      value: '#00d49f',
    },
    '600': {
      value: '#00ad83',
    },
    '700': {
      value: '#008b6d',
    },
    '800': {
      value: '#006d57',
    },
    '900': {
      value: '#005a49',
    },
    '950': {
      value: '#00332b',
    },
  },
});
