import React from 'react';
import {connect} from "react-redux";
import CategoriesView from "./CategoriesView";

const mapStateToProps = ({categories}) => ({categories})

export default connect(mapStateToProps)(CategoriesView);
