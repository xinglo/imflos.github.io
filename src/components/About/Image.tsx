import React from 'react'
import styled from 'styled-components'

const StyledPicture = styled.picture`
  grid-area: 1 / 5 / last-line / end;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    padding-top: 250%;
    display: block;
    ${props => props.theme.media.max.sm`
      padding-top: 100%;
    `}
  }

  ${props => props.theme.media.max.sm`
    grid-area: 1 / 1 / 1 / 1;
    &:before {
      padding-top: 100%;
    }
  `}
`

const StyledImage = styled.img`
  position: absolute;
  width: 80%;
  height: 90%;
  margin: auto;
  top: -100%;
  right: -80%;
  bottom: -80%;
  left: -80%;
  mix-blend-mode: lighten;
  opacity: 0.5;
  display: block;
  object-fit: cover;
  ${props => props.theme.media.max.sm`
      opacity: 0.7;
    `}
`

const Image: React.FC = () => {
  return (
    <StyledPicture>
      <StyledImage src="../../../images/my_photo.JPEG" />
    </StyledPicture>
  )
}

export default Image
