const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		{
			blogs: allArticlesJson {
				nodes {
					url
				}
			}
		}
	`);
	const project = await graphql(`
		{
			projects: allProjectsJson {
				nodes {
					projects {
						url
					}
				}
			}
		}
	`);
	const feature = await graphql(`
		{
			features: allFeaturesJson {
				nodes {
					features {
						url
					}
				}
			}
		}
	`);

	// console.log(result.data);

	result.data.blogs.nodes.forEach((blog) => {
		createPage({
			path: `/blogs/${blog.url}`,
			component: path.resolve(`src/templates/blog-template.js`),
			context: {
				slug: blog.url,
			},
		});
	});

	project.data.projects.nodes.forEach((project) => {
		// console.log(project);
		project.projects.forEach((p) => {
			createPage({
				path: `/project/${p.url}`,
				component: path.resolve(`src/templates/project-template.js`),
				context: {
					slug: p.url,
				},
			});
		});
	});

	feature.data.features.nodes.forEach((feature) => {
		// console.log(project);
		feature.features.forEach((f) => {
			createPage({
				path: `/feature/${f.url}`,
				component: path.resolve(`src/templates/feature-template.js`),
				context: {
					slug: f.url,
				},
			});
		});
	});
};
