
module.exports = {
  siteMetadata: {
    siteUrl: 'http://schedule.jsconfbp.com/',
    title: 'Info Screen',
    description: '',
    keywords: '',
    twitter: '@jsconfbp'
  },
  plugins: [
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`speaker-images`,
        path: `${__dirname}/speakers/images`,
        ignore: [ `**/\.*` ], // ignore files starting with a dot
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "speakers",
        path: `${__dirname}/speakers`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-force-trailing-slashes',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: `${__dirname}/src/images`,
          }
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'JSConf Budapest 2022',
        short_name: 'JSConf Budapest 2022',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/img/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: `${__dirname}/src/images`,
          }
      }
    },
  ],
}
