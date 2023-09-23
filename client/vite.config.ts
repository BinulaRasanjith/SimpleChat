import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Set the port
const port = 5000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port,
  },
})
