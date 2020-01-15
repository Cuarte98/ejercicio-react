import React, { useState } from 'react'
import './App.css'
import CustomSlider from './components/CustomSlider'

function App() {
  const [totalAmount, setTotalAmount] = useState(5000)
  const [fee, setFee] = useState(3)

  const calculateMonthlyFee = () =>
    parseFloat((totalAmount / fee).toFixed(2)).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'symbol',
    })

  // TODO: Currency Parser function
  // TODO: Create input on Values

  return (
    <div className="App">
      <div className="simulator">
        <h1 className="simulator__title">Simulá tu crédito</h1>
        <div className="totalAmountSlider">
          <CustomSlider
            isCurrency
            value={totalAmount}
            min={5000}
            max={50000}
            title="Monto total"
            valueCallback={setTotalAmount}
          />
        </div>
        <div className="timeSlider">
          <CustomSlider min={3} max={24} title="Plazo" value={fee} valueCallback={setFee} />
        </div>
        <div className="simulator__summary">
          <div className="simulator__result">
            <span className="simulator__label_fee">Cuota fija por mes</span>

            <span className="simulator__fee">{calculateMonthlyFee()}</span>
          </div>
          <button className="simulator__primary_button" type="button">
            Obtené credito
          </button>
          <button className="simulator__secondary_button" type="button">
            ver detalle de cuotas
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
