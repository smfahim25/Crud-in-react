import React, { useState } from 'react';

const Crud = () => {
    const [names, setNames] = useState([]);
    const [singleName, setSingleName] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        setNames([...names, singleName]);
        setSingleName("");
    }
    const editName = (index) => {
        let newNames = [...names];
        newNames[index] = singleName;
        setNames(newNames);
        setSingleName("");
    }
    const deleteName = (index) => {
        let newNames = [...names];
        let filterNames = newNames.filter((value, i) => i !== index)
        setNames(filterNames);
    }
    return (
        <div>
            <h1>Crud Operation in React JS</h1>
            <form onSubmit={handleClick}>
                <input placeholder='name' value={singleName} type="text" onChange={(e) => { setSingleName(e.target.value) }} />
                <button type="button" onClick={handleClick}>Add</button>
            </form>
            {names.map((name, index) =>
                <div key={index}>
                    <h2>{name}</h2>
                    <button onClick={() => editName(index)}>Edit</button>
                    <button onClick={() => deleteName(index)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default Crud;