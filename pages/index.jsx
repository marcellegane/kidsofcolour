import React from 'react'
import DocumentHead from '../components/globals/DocumentHead'
import { GlobalStyle } from '../Luna/components/globals/GlobalStyle/index.style'
import { Main } from '../Luna/components/globals/Main/index.style'
import { Header } from '../components/organisms/Header'

const Index = () => (
  <>
    <DocumentHead />
    <GlobalStyle />
    <Header />
    <Main></Main>
  </>
)

export default Index
