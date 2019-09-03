import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  background: var(--mainGrey);
  padding: 10px;
  color: var(--darkGrey);
  margin-top: 20px;
  text-align: center;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <p> Luke O'Malley </p>
    </FooterWrapper>
  )
}

export default Footer
