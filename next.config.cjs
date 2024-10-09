import { join } from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { join } = require('path');

export const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.pexels.com',
    },
  ],
};
export const sassOptions = {
  includePaths: [join(__dirname, 'styles')],
};

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.pexels.com',
//       },
//     ],
//   },
//   sassOptions: {
//     includePaths: [join(__dirname, 'styles')],
//   },
// };
