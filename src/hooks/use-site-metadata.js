import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					description
					image
					siteUrl
					title
					twitterUsername
				}
			}
		}
	`);

	return data.site.siteMetadata;
};
