import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {isActiveId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({isActiveId: event.target.value})
  }

  getCountryText = () => {
    const {isActiveId} = this.state

    const filterCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === isActiveId,
    )

    return filterCountry.country
  }

  render() {
    const {isActiveId} = this.state
    const country = this.getCountryText(isActiveId)

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              className="input-container"
              id="capital"
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option value={eachCapital.id} key={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label className="label" htmlFor="capital">
              {' '}
              is capital of which country?
            </label>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
