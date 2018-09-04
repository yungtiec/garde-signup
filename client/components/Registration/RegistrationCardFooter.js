import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Wrapper = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: white;
  margin: auto;
  max-width: 370.5px;
  ${breakpoint('sm')`
    max-width: 370.5px;
  `}
  ${breakpoint('md')`
    max-width: 617.5px;
  `}
  ${breakpoint('lg')`
    max-width: 650px;
  `}
`

const Left = styled.div`
  text-align: center;
  @media (min-width: 48em) {
    float: left;
  }
`

const Right = styled.div`
  text-align: center;
  @media (min-width: 48em) {
    float: right;
  }
`

export default function RegistrationCardFooter({authMethod}) {
  return (
    <Wrapper>
      <Left>
        <nav>
          <a
            href="https://thebrooklynproject.consensys.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0 text-white"
          >
            <span>About</span>
          </a>
          <a
            href="https://tinyurl.com/y94wspyg"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0 text-white"
          >
            <span>privacy policy</span>
          </a>
          <a
            href="https://drive.google.com/open?id=1p4F4UVhCohifqb0R5WzfJ8R1nKJOahIV"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0 text-white"
          >
            <span>terms of use</span>
          </a>
        </nav>
      </Left>
      {authMethod && (
        <Right>
          <p className="my-2 text-white">
            {authMethod === 'signup'
              ? 'Already have an account?'
              : "Don't have an account?"}
            <Link
              className="btn btn-outline-white ml-2"
              to={`/${authMethod === 'signup' ? 'login' : 'signup'}`}
            >
              {authMethod === 'signup' ? 'Log in' : 'Sign up'}
            </Link>
          </p>
        </Right>
      )}
    </Wrapper>
  )
}
