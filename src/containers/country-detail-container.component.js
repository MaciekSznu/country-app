import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentational/country-details.component';

class CountryDetailsContainer extends React.Component {

  // skąd to params???
  componentDidMount() {
    this.props.dispatch(getCountry(this.props.params.id));
  }

  render() {
    return (
      <CountryDetails country={this.props.selectedCountry} />
    )
  }
}

const mapSateToProps = function (store) {
  return {
    selectedCountry: store.countriesReducer.selectedCountry
  };
};

export default connect(mapSateToProps)(CountryDetailsContainer);