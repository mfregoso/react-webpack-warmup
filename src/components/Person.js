import React from "react";

const Person = (props) => {
    const { dob, gender, location, name, nat, picture, phone, idx } = props;
    
    return (
        <div key={idx} style={{ padding: "0.5em" }}>
            {picture && <img src={picture.thumbnail} />}
            {name && <p>Name: {`${name.first} ${name.last}`}</p>}
            {gender && <p>Gender: {gender}</p>}
            {nat && <p>Nationality: {nat}</p>}
            {dob && <p>Age: {dob.age}</p>}
            {location && <p>Location: {location.city}</p>}
            {phone && <p>Phone: {phone}</p>}
        </div>
    )
}

export default Person;