import React from 'react'
import styled from 'styled-components'

export const PreboardingBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 50px;
`

export const PreboardingCard = styled.div`
  width: 800px;
  margin: 50px auto;
  min-height: 700px;
  background: white;
  box-sizing: border-box;
`

export {default as PreboardingIntro} from './PreboardingIntro'
export {default as PreboardingStepOne} from './PreboardingStepOne'
export {default as PreboardingStepTwo} from './PreboardingStepTwo'
export {default as PreboardingStepThree} from './PreboardingStepThree'
