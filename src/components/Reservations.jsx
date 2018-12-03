import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Room from './Room';
import { connect } from 'react-redux';
import { setStateFromLocalStorage } from '../actions/reservations';

export class Reservations extends Component {
  componentDidMount() {
    const { setStateFromLocalStorage } = this.props;
    const reservations = localStorage.getItem('reservations');

    reservations && setStateFromLocalStorage(JSON.parse(reservations));
  }

  handleSubmit = e => {
    const { reservations } = this.props;

    e.preventDefault();
    localStorage.setItem('reservations', JSON.stringify(reservations));
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <Room id={1} />
        <Room id={2} />
        <Room id={3} />
        <Room id={4} />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

Reservations.propTypes = {
  reservations: PropTypes.object.isRequired,
  setStateFromLocalStorage: PropTypes.func.isRequired,
};

const mapStateToProps = ({ reservations }) => {
  return {
    reservations,
  };
};

export default connect(
  mapStateToProps,
  { setStateFromLocalStorage }
)(Reservations);
