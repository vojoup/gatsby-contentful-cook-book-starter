import React, { Component } from 'react'

export default class Ingredients extends Component {
  render(props) {
    const { ingredients } = this.props;
    return (
      <ul>
        {ingredients.map(({ name, amount }, i) => <li key={i}>{name}, {amount}</li>)}
      </ul>
    )
  }
}
