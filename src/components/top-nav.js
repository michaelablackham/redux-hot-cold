import React from 'react';
import {connect} from 'react-redux';

import {newGame, getInfo} from '../actions';

import './top-nav.css';

export class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        // if (this.props.onNewGame) {
        //     this.props.onNewGame();
        // }
        this.props.dispatch(newGame());
    }

    onInfo(event) {
        event.preventDefault();
        // if (this.props.onInfo) {
        //     this.props.onInfo();
        // }
        this.props.dispatch(getInfo());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.onInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);
