import React from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries } from '../actions/actions-countries';

class CountryFlagContainer extends React.Component {

  // odwołanie do store metoda dispatch
  componentDidMount() {
    this.props.dispatch(getCountries());
  }

  render() {
    return (
      <div>
        <CountryFlagList countries={this.props.countries} />
      </div>
    )
  }
}

// stan aplikacji jest mapowany do propsa countries w komponencie CountryFlagContainer skąd jest przekazywany jako parametr do propsa countries komponentu CountryFlagList który w ten sposób otrzymuje tablice obiektów countries
const mapStateToProps = function (store) {
  return {
    countries: store.countriesReducer.countries
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);