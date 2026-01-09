import {Header} from "./Header.jsx";


function Profile( {name, age, profesion} ) {

    return (
        <>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{profesion}</p>
        </>
    )
}

export default Profile