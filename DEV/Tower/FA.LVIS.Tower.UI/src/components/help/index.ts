import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import psHelp from 'DEV/Tower/FA.LVIS.Tower.UI/ext-modules/psHelp/psHelp';

// Mapping the state to props to be used in the component
const mapStateToProps = (state) => {
  // Assuming 'helpContent' is part of the state that we want to map
  return {
    content: state.helpContent
  };
};

// Mapping dispatch actions to props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // Assuming 'actionCreator1', 'actionCreator2' are actions we want to bind
    // actionCreator1,
    // actionCreator2,
  }, dispatch);
};

// Connecting the psHelp component to Redux store
const ConnectedPsHelp = connect(mapStateToProps, mapDispatchToProps)(psHelp);

export default ConnectedPsHelp;