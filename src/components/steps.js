import React, { Component } from 'react'

export default class Steps extends Component {
  render(props) {
    const { steps } = this.props;
    return (
      <ul>
        {steps.map(({ number, description: { description } }, i) => <li key={i}><strong>{number}.</strong> {description}</li>)}
      </ul>
    )
  }
}
