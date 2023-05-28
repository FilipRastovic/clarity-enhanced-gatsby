/**
 * @type {import('gatsby').GatsbyConfig}
 * @ts-ignore
 * @author EnvyTheme.com
 */
module.exports = {
	siteMetadata: {
		title: `Doji - Digital Agency Gatsby Template`,
		description: `Example project for the Gatsby Head API`,
		twitterUsername: `@gatsbyjs`,
		image: `/icon.png`,
		siteUrl: `https://doji-gatsby.envytheme.com`,
	},
	plugins: [
		`gatsby-plugin-transition-link`,
		"gatsby-plugin-image",
		"gatsby-transformer-remark",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		// {
		// 	resolve: `gatsby-transformer-json`,
		// },
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "data",
				path: `${__dirname}/src/data/`,
			},
		},
		"gatsby-plugin-mdx",
		"gatsby-transformer-json",
	],
};
