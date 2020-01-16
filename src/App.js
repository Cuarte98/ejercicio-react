import React, { useState } from 'react'
import './App.css'
import CustomSlider from './components/CustomSlider'

const currencyParser = value =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })

function App() {
  const [totalAmount, setTotalAmount] = useState(5000)
  const [fee, setFee] = useState(3)

  const calculateMonthlyFee = () => {
    if (totalAmount > 50000 || totalAmount < 5000 || fee < 3 || fee > 24) return 'ERROR'

    return currencyParser(totalAmount / fee)
  }

  // TODO: Currency Parser function

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
