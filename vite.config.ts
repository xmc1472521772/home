import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// 获取仓库名称作为基础路径
const repoName = 'HousingSystem';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true,
  },
}); 