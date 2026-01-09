import {useState} from "react";



function Contact( props ) {

    return (
        <>
            {props.show ?  (<>
                <h1>Contacto</h1>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </>) : (<></>)}

        </>
    )
}

export default Contact