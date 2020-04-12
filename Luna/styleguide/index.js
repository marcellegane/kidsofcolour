import React from 'react'
import PropTypes from 'prop-types'
import { Luna } from '..'
import { Container, Stack, Grid, GridItem } from '../layouts'
import { Accordion, AccordionTitle, AccordionItem } from '../components'
import { IconBin, IconPlus } from '../svgs'
import {
  StyleGuide,
  XXXLarge,
  XXLarge,
  XLarge,
  Large,
  Medium,
  Small,
  ColorSwatch,
  ColorSwatchRow,
  ColorSwatchBlock,
  StyleguideTitle,
  ColorBlock,
} from './index.style'

function renderColorBlocks(colorObject) {
  return Object.keys(colorObject).map(name => (
    <ColorSwatchBlock key={name}>
      <ColorSwatch backgroundColor={colorObject[name]} />
      <Small>{name}</Small>
      <Small>{colorObject[name]}</Small>
    </ColorSwatchBlock>
  ))
}

const ThisStyleGuide = ({ children }) => (
  <StyleGuide>
    <Container>
      <Stack>
        <StyleguideTitle>Colours</StyleguideTitle>
        <XLarge>Primary</XLarge>
        <ColorSwatchRow>{renderColorBlocks(Luna.color.primary)}</ColorSwatchRow>
        <XLarge>Secondary</XLarge>
        <ColorSwatchRow>
          {renderColorBlocks(Luna.color.secondary)}
        </ColorSwatchRow>
        <XLarge>Grey</XLarge>
        <ColorSwatchRow>{renderColorBlocks(Luna.color.grey)}</ColorSwatchRow>

        <StyleguideTitle>Font Styles</StyleguideTitle>
        <div>
          <Medium># XXXLarge</Medium>
          <XXXLarge>
            {Luna.font.family.brand}, {Luna.font.weight.normal},{' '}
            {Luna.TextStyles.xxxlarge.size} /{' '}
            {Luna.TextStyles.xxxlarge.lineHeight}
          </XXXLarge>
        </div>
        <div>
          <Medium># XXLarge</Medium>
          <XXLarge>
            {Luna.font.family.brand}, {Luna.font.weight.normal},{' '}
            {Luna.TextStyles.xxlarge.size} /{' '}
            {Luna.TextStyles.xxlarge.lineHeight}
          </XXLarge>
        </div>
        <div>
          <Medium># XLarge</Medium>
          <XLarge>
            {Luna.font.family.brand}, {Luna.font.weight.normal},{' '}
            {Luna.TextStyles.xlarge.size} / {Luna.TextStyles.xlarge.lineHeight}
          </XLarge>
        </div>
        <div>
          <Medium># Large</Medium>
          <Large>
            {Luna.font.family.brand}, {Luna.font.weight.normal},{' '}
            {Luna.TextStyles.large.size} / {Luna.TextStyles.large.lineHeight}
          </Large>
        </div>
        <div>
          <Medium># Medium</Medium>
          <Medium>
            {Luna.font.family.brand}, {Luna.font.weight.normal},{' '}
            {Luna.TextStyles.medium.size} / {Luna.TextStyles.medium.lineHeight}
          </Medium>
        </div>
        <div>
          <Small># Small</Small>
          <Small>
            {Luna.font.family.brand}, {Luna.font.weight.normal},{' '}
            {Luna.TextStyles.small.size} / {Luna.TextStyles.small.lineHeight}
          </Small>
        </div>

        <StyleguideTitle>Grid</StyleguideTitle>
        <Grid>
          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={6}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>
        </Grid>

        <StyleguideTitle>Components</StyleguideTitle>

        <StyleguideTitle>Inputs</StyleguideTitle>

        <StyleguideTitle>Icons</StyleguideTitle>
        <IconBin />
        <IconPlus />

        <StyleguideTitle>Molecules</StyleguideTitle>

        <AccordionTitle>Accordion</AccordionTitle>

        <Grid>
          <GridItem medium="6">
            <Accordion>
              <AccordionItem label="AccordionItem 1">
                <Medium>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  dolore, distinctio magnam vitae, sapiente maxime neque dolores
                  alias repellat, consequuntur assumenda facilis. Dolores natus
                  alias dicta iste illum necessitatibus consequuntur!
                </Medium>
              </AccordionItem>
              <AccordionItem label="AccordionItem 2">
                <Medium>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  dolore, distinctio magnam vitae, sapiente maxime neque dolores
                  alias repellat, consequuntur assumenda facilis. Dolores natus
                  alias dicta iste illum necessitatibus consequuntur!
                </Medium>
              </AccordionItem>
              <AccordionItem label="AccordionItem 3">
                <Medium>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  dolore, distinctio magnam vitae, sapiente maxime neque dolores
                  alias repellat, consequuntur assumenda facilis. Dolores natus
                  alias dicta iste illum necessitatibus consequuntur!
                </Medium>
              </AccordionItem>
            </Accordion>
          </GridItem>
        </Grid>

        {children}
      </Stack>
    </Container>
  </StyleGuide>
)

ThisStyleGuide.propTypes = {
  children: PropTypes.node,
}

export { ThisStyleGuide as Styleguide }
