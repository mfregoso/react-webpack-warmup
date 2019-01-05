import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actions/index";

class Filters extends React.Component {
    constructor(props) {
        super(props)

        this.renderInput = (name, idx) => {
            return (
                <React.Fragment key={idx}>
                    <input type="checkbox" checked={this.props.checkedFilters[name]}
                        onChange={() => this.props.updateFilter(name)} />
                    <label>{name}</label>
                    <p />
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Filtered Search</h2>
                {Object.keys(this.props.checkedFilters).map((name, idx) => this.renderInput(name, idx))}
            </div>
        )
    }
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