import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {active: 'TOP', color1: '#8ae323', color2: '#014f7b'}

  onchangeC1 = e => {
    this.setState({color1: e.target.value})
  }

  onchangeC2 = e => {
    this.setState({color2: e.target.value})
  }

  onchangeActive = id => {
    this.setState({active: id})
  }

  render() {
    const {active, color1, color2} = this.state
    return (
      <div data-testid="gradientGenerator">
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <ul>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              item={each}
              active={active}
              onchangeActive={this.onchangeActive}
            />
          ))}
        </ul>

        <p>Pick the Colors</p>
        <p>{color1}</p>
        <p>{color2}</p>

        <input type="color" value={color1} onChange={this.onchangeC1} />
        <input type="color" value={color2} onChange={this.onchangeC2} />

        <button type="button">Generate</button>
      </div>
    )
  }
}

export default GradientGenerator
