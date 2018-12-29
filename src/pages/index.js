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
    <form action="/success" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
);

export default IndexPage;
