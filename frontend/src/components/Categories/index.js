import React from 'react';
import {connect} from "react-redux";
import CategoriesView from "./CategoriesView";

const mapStateToProps = ({categoriesStore}) => ({categories: categoriesStore.categories})

export default connect(mapStateToProps)(CategoriesView);
