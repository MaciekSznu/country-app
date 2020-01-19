import React from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries } from '../actions/actions-countries';

class CountryFlagContainer extends React.Component {

  // odwołanie do store metoda dispatch
  componentDidMount() {
    this.props.dispatch(getCountries());
    this.props.dispatch(searchCountries(''));

  }

  search(e) {
    this.props.dispatch(searchCountries(e.target.value))
  }

  render() {
    return (
      <div>
        <div className="search text-center">
          <input type="text" onChange={this.search.bind(this)} />
        </div>
        <CountryFlagList countries={this.props.visibleCountries} />
      </div>
    )
  }
}

// stan aplikacji jest mapowany do propsa countries w komponencie CountryFlagContainer skąd jest przekazywany jako parametr do propsa countries komponentu CountryFlagList który w ten sposób otrzymuje tablice obiektów countries
const mapStateToProps = function (store) {
  return {
    countries: store.countriesReducer.countries,
    visibleCountries: store.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);