import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(
    {
        plugins: [react()],
        resolve: {
            alias: {
                '@assets': '/src/assets',
                '@components': '/src/components',
                '@middleware': '/src/middleware',
                '@pages': '/src/pages',
                '@layouts': '/src/layouts',
                '@helpers': '/src/helpers',
                '@configs': '/src/configs',
                '@utils': '/src/utils',
                '@contexts': '/src/contexts',
                '@': '/src',
            },
        },
    }
)
