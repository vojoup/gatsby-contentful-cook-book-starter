import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Ingredients from '../components/ingredients';
import Steps from '../components/steps';

const SecondPage = (props) => {
  const recipeName = props.location.state.recipe;
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Selected recipe {recipeName}</h1>
      <StaticQuery
        query={graphql`
          query {
            allContentfulRecipe(filter: {name: {eq: "Hot dogs"}}) {
              edges {
                node {
                  author
                  creationDate
                  about {
                    about
                  }
                  ingredients {
                    name
                    amount
                  }
                  steps {
                    number
                    description {
                      description
                    }
                  }
                }
              }
            }
          }
        `}
        render={
          ({ allContentfulRecipe }) => {
            const recipe = allContentfulRecipe.edges[0].node;
            return (
              <div>
                <p>{recipe.about.about}</p>
                <h3>Ingredients: </h3>
                <Ingredients ingredients={recipe.ingredients} />
                <Steps steps={recipe.steps} />
              </div>
            );
          }
        }
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}

export default SecondPage