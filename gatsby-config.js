module.exports = {
  siteMetadata: {
    title: 'Retune',
    url: 'https://retune.uber.space',
    // url: 'https://retune.de',
    keywords: '',
    twitter: 'https://twitter.com/retuneberlin/',
    facebook: 'https://www.facebook.com/retuneberlin/',
    instagram: 'https://www.instagram.com/retuneberlin/',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    // Analytics config for matomo (aka piwik)
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '6',
        matomoUrl: '//piwik.retune.de',
        siteUrl: '//retune.de',
        // Set to `true` to send analytics in development mode
        // This should usually be left as `false` so analytics
        // is only sent in production
        dev: false,
      },
    },
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
      resolve: 'gatsby-source-prismic',
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: 'retune-main',

        // An API access token to your prismic.io repository. This is required.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        accessToken:
          'MC5XLTZUV3hRQUFDUkJPUzh3.H--_vRp1NO-_ve-_ve-_ve-_vULvv73vv71677-977-9Uknvv73vv73vv70X77-9K--_vT5N77-977-9WjXvv70G',

        // Set a link resolver function used to process links in your content.
        // Fields with rich text formatting or links to internal content use this
        // function to generate the correct link URL.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different link resolver logic for each field if necessary.
        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
        // linkResolver: ({ node, key, value }) => doc => {
        //   // Your link resolver
        // },

        // Set a list of links to fetch and be made available in your link
        // resolver function.
        // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
        // fetchLinks: [
        //   // Your list of links
        // ],

        // Set an HTML serializer function used to process formatted content.
        // Fields with rich text formatting use this function to generate the
        // correct HTML.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different HTML serializer logic for each field if necessary.
        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
        // htmlSerializer: ({ node, key, value }) => (
        //   type,
        //   element,
        //   content,
        //   children
        // ) => {
        //   // Your HTML serializer
        // },

        // Set a default language when fetching documents. The default value is
        // '*' which will fetch all languages.
        // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
        // lang: '*',
      },
    },
  ],
}
