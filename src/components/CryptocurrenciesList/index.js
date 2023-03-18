import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

const CryptocurrenciesList = props => {
  const {details} = props

  return (
    <ul className="currencies-list">
      <h1 className="main-head">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="crypto-image"
      />
      <div className="table">
        <div className="table-heads">
          <p>Coin Type</p>
          <div className="curr-values">
            <p>USD</p>
            <p className="euro-head">EURO</p>
          </div>
        </div>
        <div>
          {details.map(eachItem => (
            <CryptocurrencyItem items={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    </ul>
  )
}

export default CryptocurrenciesList
