import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 项目站点部署在子路径下，必须配置 base，否则资源 404
  base: '/Derek-Callan-business-english/',
})
