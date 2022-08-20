import React from 'react';

const Footer = (props) => {
    console.log(">>>>props",props)
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h3>&copy; Developer Chetna {props.year} {props.month}</h3>
            </center>
        </React.Fragment>
    )
}

export default Footer;