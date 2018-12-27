import React, { Component } from 'react'
import { Link } from 'gatsby';

export default class RecipeItem extends Component {
  render() {
    const { name, author, creationDate } = this.props;
    return (
      <Link
        to={`/detail`}
        state={{ recipe: name }}>
        <div
          style={{ border: '1px solid #111', padding: '1rem', margin: '1rem' }}>
          <h2>{name}</h2>
          <span>{author}, </span>
          <small>{creationDate}</small>
        </div>
      </Link >
    )
  }
}
