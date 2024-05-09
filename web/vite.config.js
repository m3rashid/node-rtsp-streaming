import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"^/:id": {
				target: "http://localhost:8080/stream/:id",
				changeOrigin: false
			}
		}
	}
})
