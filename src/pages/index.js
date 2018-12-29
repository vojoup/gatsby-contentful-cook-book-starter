import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'
import RecipeItem from '../components/recipe-item';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        query {
          allContentfulRecipe {
            edges {
              node {
                name
                author
                creationDate
              }
            }
          }
        }
      `}
      render={({
        allContentfulRecipe: {
          edges
        }
      }) => edges.map(({ node }, i) => <RecipeItem {...node} key={i} />)}
    />
  </Layout>
);

export default IndexPage;
