import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',  // Expose the app to the network
    port: 5173,        // Port the server runs on
    strictPort: true,  // Avoid conflicts if the port is already in use
  }
});
