module.exports = {
  siteMetadata: {
    title: 'Retune',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-cockpit',
      options: {
        cockpitConfig: {
          baseURL: 'https://retune.uber.space',
          folder: '/cockpit-master',
          accessToken: '6b12ce26d8ef977bcb592e0bcfe6cd',
          collections: null /* fetch all */,
          regions: null /* fetch all */,
          //customComponents: [],
        },
      },
    },
  ],
}
