import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//   },
// });

// 수정 0807 _ vercel배포
export default defineConfig({
  // base: '/YujinsBlog/',
  plugins: [react()]
});
