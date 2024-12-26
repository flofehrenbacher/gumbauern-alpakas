import { withPigment } from '@pigment-css/nextjs-plugin';

/**
 * @type {import('next').NextConfig}
 */
export default withPigment({
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "cdn.sanity.io" },
        ],
    },
})

