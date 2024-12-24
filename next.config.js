import { withPigment } from '@pigment-css/nextjs-plugin';

/**
 * @type {import('next').NextConfig}
 */
export default withPigment({
  output: 'export',
  distDir: 'dist',
})

