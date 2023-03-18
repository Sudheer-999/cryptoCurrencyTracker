import './index.css'

const CryptocurrencyItem = props => {
  const {items} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = items

  return (
    <li className="currency-item">
      <div className="currency-type">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-item-values">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
