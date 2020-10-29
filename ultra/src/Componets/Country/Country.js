import React from 'react';

const Country = (props) => {
    const {name, flag, population, region} = props.country;
    const flagStyle ={height:'50px'};
    const countryStyle ={border:'1px solid gray', margin:'5px'}
    
    return (
        <div style={countryStyle}>
            <h4> this is country{name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>{region}</p>
            <p><small>{population}</small></p>
            <button onClick={()=>props.click(props.country)}>aa</button>
        </div>
    );
};

export default Country;