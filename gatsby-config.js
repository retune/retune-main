module.exports = {
  siteMetadata: {
    title: 'Retune',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      // We need filesystem source plugin to add publicURL function to File nodes
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'placeholder',
        // path is required param, so let's just point it to single file to not create
        // much unnecessary work for it
        path: `${__dirname}/gatsby-config.js`,
      },
    },
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
