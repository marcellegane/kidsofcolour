import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './index.style'
import { Menu } from '../../molecules/Menu'
import { Container } from '../../../Luna/layouts/Container'

const ThisHeader = () => (
  <Header>
    <Container>
      <nav>
        <Menu />
      </nav>
    </Container>
  </Header>
)

ThisHeader.propTypes = {}

ThisHeader.defaultProps = {}

export { ThisHeader as Header }
