import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actions/index";

const Filters = props => {
    const renderInput = (name, idx) => {
        return (
            <React.Fragment key={idx}>
                <input type="checkbox" checked={props.checkedFilters[name]}
                    onChange={() => props.updateFilter(name)} />
                <label>{name}</label>
                <p />
            </React.Fragment>
        )
    }

    return (
        <div>
            <h2>Filtered Search</h2>
            {Object.keys(props.checkedFilters).map(renderInput)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        checkedFilters: state.checkedFilters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateFilter: (name) => {
            dispatch(Actions.updateFilter(name));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);