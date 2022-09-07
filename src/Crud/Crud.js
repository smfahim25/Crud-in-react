import React, { useState } from 'react';

const Crud = () => {
    const [names, setNames] = useState([]);
    const [singleName, setSingleName] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        setNames([...names, singleName]);
    }
    return (
        <div>
            <h1>Crud Operation in React JS</h1>
            <form onSubmit={handleClick}>
                <input type="text" onChange={(e) => { setSingleName(e.target.value) }} />
                <button type="button" onClick={handleClick}>submit</button>
            </form>
            {names.map((name, index) =>
                <div key={index}>
                    <h2>{name}</h2>
                </div>
            )}
        </div>
    );
};

export default Crud;