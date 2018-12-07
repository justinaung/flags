import React, {Component} from 'react'
import shuffle from 'shuffle-array'

function getRandInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

class CountryGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      randomCountry: {},
      country: '' 
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const countriesUrl = 'https://restcountries.eu/rest/v2/all?fields=name;flag'

    if (this.state.countries.length === 0) {
      fetch(countriesUrl)
        .then(res => res.json())
        .then(countries => this.setState({ countries: shuffle(countries) }))
        .then(() => this.setState(
          { randomCountry: this.state.countries[getRandInt(4)] }
        ))
        .catch(console.warn)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const {randomCountry, country} = this.state
    if (randomCountry.name === country) {
      alert(`Correct! It is ${randomCountry.name}.`)
    } else {
      alert(`Incorrect! It is ${randomCountry.name}.`)
    }
    
    const shuffledCountries = shuffle(this.state.countries, {copy: true})
    this.setState({
      countries: shuffledCountries, 
      randomCountry: shuffledCountries[getRandInt(4)], 
      country: ''
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    let flag = <div>Loading...</div>
    let choices = []
    const { countries, randomCountry } = this.state

    if (countries && countries.length > 0) {
      flag = <img src={randomCountry.flag} alt={randomCountry.name} />
      choices = countries.slice(0, 4).map((c, index) => (
        <label>
          <input
            key={index}
            type="radio"
            name="country"
            value={c.name}
            id={`${c.name}-${index}`}
            onChange={this.handleChange}
          />
          {c.name}
        </label>
      ))
      choices.push(<button type="submit">Guess</button>)
    }
    return (
      <div style={{ marginTop: '15px' }}>
      <form onSubmit={this.handleSubmit}>
        {choices}
        {flag}
      </form>
      </div>
    )
  }
} 

export default CountryGame
