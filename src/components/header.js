import React from 'react';
import {connect} from 'react-redux';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export function Header(props)  {
  let infoModal;
  if(props.showInfoModal) {
    infoModal = <infoModal/>;
  }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showInfoModal: false
    //     };
    // }

    // toggleInfoModal() {
    //     this.setState({
    //         showInfoModal: !this.state.showInfoModal
    //     });
    // }

    // render() {
    //     let infoModal;
    //     if (this.state.showInfoModal) {
    //         infoModal = <InfoModal onClose={() => this.toggleInfoModal()} />;
    //     }

        return (
            <header>
            //can get rid of all props being passed in through here since
            //it is all passed through provider
                <TopNav />
                {
                  // <TopNav onInfo={() => this.toggleInfoModal()}
                  //     onNewGame={this.props.onNewGame} />
                }
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    // }
};

const mapStateToProps = state => ({
  showInfoModal: state.showInfoModal
});

export default connect(mapStateToProps)(Header);
