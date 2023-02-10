// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  eslint: {
    dirs: ['src'],
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;

// safely ignore recoil warning messages in dev mode (triggered by HMR)
if (process.env.NODE_ENV === 'development') {
  function interceptStdout(text) {
    if (text.includes('Duplicate atom key')) {
      return '';
    }
    return text;
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const intercept = require('intercept-stdout');

  intercept(interceptStdout);
}
