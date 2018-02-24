import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SerieList from '../containers/serie-list';
import ModalWindow from '../containers/modal';
import {onSerieClick, closeModal, changePage, showEpisodes} from '../actions'
require('../../scss/style.scss');

class App extends React.Component {
  componentDidMount() {
    /*this.interval = setInterval(() => {
      this.props.refreshGridCells();
    }, 100);
    */
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    console.log('PROPS:', this.props)
    return (
      <div>
        <SerieList 
          series={this.props.series} 
          onClick={this.props.onSerieClick}
          pages={this.props.pages}
          goToPage={this.props.changePage}
           />
        <ModalWindow 
          serie={this.props.activeSerie} 
          showModal={this.props.modal.showModal} 
          hideModal={this.props.closeModal} 
          episodeShowStatus={this.props.modal.showEpisodes}
          showEpisodes={this.props.showEpisodes}/>
    </div>
    );
  }
}

const mapStateToProps = ({ series, activeSerie, modal, pages }) => ({
  series,
  activeSerie,
  modal,
  pages
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onSerieClick,
      closeModal,
      changePage,
      showEpisodes,
    },
    dispatch,
  );
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
