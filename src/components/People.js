import React from "react";
import PersonBox from "./Person";
import { connect } from "react-redux";

const People = (props) => {
    return (
        <React.Fragment>
            {(props.people || []).map((person, idx) => PersonBox({...person, idx}))}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        people: state.people
    }
}

export default connect(mapStateToProps, null)(People);
