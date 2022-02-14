import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  actionSearchBox = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state

    const filteredDetails = destinationsList.filter(a =>
      a.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="search-box-container">
          <h1 className="destination-heading">Destination Search</h1>
          <div className="search-box">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              onChange={this.actionSearchBox}
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="Search Icon"
            />
          </div>
        </div>
        <ul className="items-container">
          {filteredDetails.map(a => (
            <DestinationItem key={a.id} imgUrl={a.imgUrl} name={a.name} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
