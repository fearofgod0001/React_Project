import React from "react";

const Person = ({name, age , gender}) => {
    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
            <p>{gender}</p>
        </>
    );
}

export default Person;