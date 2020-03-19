/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

const status = props => {
  return (
    <section id="cart">
      {props.items.inCart.map((val, idx) => {
        // eslint-disable-next-line semi
        return <li key={idx} className="cart">{val}</li>})}
    </section>);
};

const mapStateToProps = state => {
  // eslint-disable-next-line semi
  return { items: state.cart }
};

export default connect(mapStateToProps)(status);