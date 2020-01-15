import React from 'react'
import Slider from 'rc-slider'
import { PropTypes } from 'prop-types'
import 'rc-slider/assets/index.css'
import './CustomSlider.css'

const CustomSlider = ({ min, max, title, isCurrency, value, valueCallback }) => (
  <div className="slider">
    <span className="slider__title">{title}</span>
    <span className="slider__current-value">
      {isCurrency && '$ '}
      {value.toLocaleString('currency')}
    </span>
    <div className="slider__wrapper">
      <Slider min={min} max={max} onChange={valueCallback} />
      <span className="slider__min-label">
        {isCurrency && '$ '}
        {min}
      </span>
      <span className="slider__max-label">
        {isCurrency && '$ '}
        {max}
      </span>
    </div>
  </div>
)

CustomSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isCurrency: PropTypes.bool,
  value: PropTypes.number.isRequired,
  valueCallback: PropTypes.func.isRequired,
}

CustomSlider.defaultProps = {
  isCurrency: false,
}

export default CustomSlider
