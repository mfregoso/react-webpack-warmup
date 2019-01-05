import React from "react";
import PersonBox from "./Person";
import { connect } from "react-redux";

class People extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <React.Fragment>
                {(this.props.people || []).map((person, idx) => PersonBox({...person, idx}))}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        people: state.people
    }
}

export default connect(mapStateToProps, null)(People);
