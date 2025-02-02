import {StyledLi} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, active, onchangeActive} = props
  const {directionId, value, displayText} = item

  onchange = () => {
    onchangeActive(directionId)
  }

  return (
    <li key={value}>
      <StyledLi
        type="button"
        value={directionId}
        opacity={active}
        onClick={onchange}
      >
        {displayText}
      </StyledLi>
    </li>
  )
}

export default GradientDirectionItem
