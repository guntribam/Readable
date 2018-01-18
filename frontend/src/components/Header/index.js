import React from 'react';
import {connect} from 'react-redux';
import HeaderView from "./HeaderView";
import {push} from 'react-router-redux'

const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch) => {
	return {
		navigateTo: (location) => dispatch(push(location))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderView);