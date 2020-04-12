import React from 'react'
import DocumentHead from '../components/globals/DocumentHead'
import { GlobalStyle } from '../Luna/components/globals/GlobalStyle/index.style'
import { Main } from '../Luna/components/globals/Main/index.style'
import { Styleguide } from '../Luna/styleguide'

const Index = () => (
  <>
    <DocumentHead />
    <GlobalStyle />
    <Main>
      <Styleguide />
    </Main>
  </>
)

export default Index
