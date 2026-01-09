import {useState} from "react";



function Contact({ email, phone, show}) {

    return (
        <>
            {show ?  (<>
                <h1>Contacto</h1>
                <p>{email}</p>
                <p>{phone}</p>
            </>) : (<></>)}

        </>
    )
}

export default Contact