/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  compiler: {
    emotion: true
  }
}

module.exports = nextConfig
