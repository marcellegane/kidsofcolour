import { Font } from '../config/font'
import { Layout } from '../config/layout'

function pxToRem(pixelValue) {
  return `${pixelValue / Font.size.base}rem`
}

function pxToEm(pixelValue, pixelBase = 16) {
  return `${pixelValue / pixelBase}em`
}

function gridUnitsToRem(unitValue = 1) {
  return pxToRem(unitValue * Layout.grid.unit)
}

export { pxToRem, pxToEm, gridUnitsToRem }
