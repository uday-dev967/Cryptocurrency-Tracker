import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptocurrenciesDataList} = this.props
    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="cryptocurrencies-list-container">
          <div className="list-header">
            <p className="list-coin-type-heading">Coin Type</p>
            <div className="usd-and-euro-values-container">
              <p className="list-coin-value-heading">USD</p>
              <p className="list-coin-value-heading">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrencies-list">
            {cryptocurrenciesDataList.map(eachCryptocurrency => (
              <CryptocurrencyItem
                key={eachCryptocurrency.id}
                cryptocurrencyDetails={eachCryptocurrency}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
