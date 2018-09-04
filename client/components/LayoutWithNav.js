import React from 'react'
import {Navbar} from './index'

const LayoutWithNav = ({children}) => (
  <React.Fragment>
    <Navbar />
    {children}
  </React.Fragment>
)

export default LayoutWithNav
