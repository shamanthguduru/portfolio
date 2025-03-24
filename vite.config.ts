import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

 HEAD
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr: {
      clientPort: 443
    }
  }
});
 022d75c (Initial commit)
