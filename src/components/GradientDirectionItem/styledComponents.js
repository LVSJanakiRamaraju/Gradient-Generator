import styled from 'styled-components'

export const StyledLi = styled.button`
  opacity: ${props => (props.value === props.opacity ? 1 : 0.5)};
`
