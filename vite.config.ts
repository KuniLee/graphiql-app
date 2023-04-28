import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

const viteEnv: { [key: string]: string } = {};

Object.keys(process.env).forEach((key) => {
  if (key.startsWith(`VITE_`)) {
    Object.assign(viteEnv, { [`import.meta.env.${key}`]: process.env[key] });
  }
});

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
