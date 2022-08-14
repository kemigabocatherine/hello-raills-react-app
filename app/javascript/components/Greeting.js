import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"

const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

function getGreeting() {
  console.log('getGreeting() Action!!');
  return (dispatch) => {
    dispatch({ type: GET_GREETING_REQUEST });
    return fetch('v1/greetings.json')
      .then((response) => response.json())
      .then((json) => dispatch(getGreetingSuccess(json)))
      .catch((error) => console.log(error));
  };
}

export function getGreetingSuccess(json) {
  return {
    type: GET_GREETING_SUCCESS,
    payload: json
  };
}

class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="getGreetingBtn" onClick={() => this.props.getGreeting()}>getGreeting</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greeting: state => state.greeting,
});

const mapDispatchToProps = { getGreeting }

Greeting.propTypes = {
  greeting: PropTypes.string
};
export default connect(structuredSelector, mapDispatchToProps)(Greeting)