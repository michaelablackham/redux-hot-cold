import React from 'react';
//need to connect the store and provider to this area through "connect"
import {connect} from 'react-redux';

import './guess-count.css';

export function GuessCount(props) {
    return (
        <p>
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}

const mapStateToProps = state => ({
  count: state.guesses.length
});

export default connect(mapStateToProps)(GuessCount);
