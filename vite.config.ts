import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@ui': path.resolve(__dirname, 'src/hobby-bunker-ui'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
     
    /* [
      { find: '@', replacement: path.resolve(__dirname, 'src') }, 
      { find: '@ui', replacement: path.resolve(__dirname, 'src/hobby-bunker-ui') }
    ] */
  }
})
